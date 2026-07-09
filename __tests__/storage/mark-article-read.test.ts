import { markArticleRead } from '@/storage';
import { afterEach, expect, test, vi } from 'vitest';

afterEach(() => {
  vi.restoreAllMocks();
});

test('markArticleRead persists the href as a JSON array under "read-articles"', () => {
  markArticleRead('/2026-05-18/a1');

  expect(localStorage.getItem('read-articles')).toBe('["/2026-05-18/a1"]');
});

test('markArticleRead is idempotent: marking twice stores one entry', () => {
  markArticleRead('/2026-05-18/a1');
  markArticleRead('/2026-05-18/a1');

  expect(localStorage.getItem('read-articles')).toBe('["/2026-05-18/a1"]');
});

test('markArticleRead self-heals corrupt data with a fresh array', () => {
  localStorage.setItem('read-articles', 'not-json');

  markArticleRead('/2026-05-18/a1');

  expect(localStorage.getItem('read-articles')).toBe('["/2026-05-18/a1"]');
});

test('markArticleRead does not throw when storage is unavailable', () => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
    throw new Error('denied');
  });
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new Error('denied');
  });

  expect(() => markArticleRead('/2026-05-18/a1')).not.toThrow();
});
