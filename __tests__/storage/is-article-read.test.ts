import { isArticleRead } from '@/storage';
import { afterEach, expect, test, vi } from 'vitest';

afterEach(() => {
  vi.restoreAllMocks();
});

test('isArticleRead returns false when nothing is stored', () => {
  expect(isArticleRead('/2026-05-18/a1')).toBe(false);
});

test('isArticleRead returns true when the href is stored', () => {
  localStorage.setItem('read-articles', '["/2026-05-18/a1"]');

  expect(isArticleRead('/2026-05-18/a1')).toBe(true);
});

test('isArticleRead treats corrupt JSON as nothing read', () => {
  localStorage.setItem('read-articles', 'not-json');

  expect(isArticleRead('/2026-05-18/a1')).toBe(false);
});

test('isArticleRead treats non-array JSON as nothing read', () => {
  localStorage.setItem('read-articles', '{}');

  expect(isArticleRead('/2026-05-18/a1')).toBe(false);
});

test('isArticleRead returns false without throwing when storage is unavailable', () => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
    throw new Error('denied');
  });

  expect(isArticleRead('/2026-05-18/a1')).toBe(false);
});
