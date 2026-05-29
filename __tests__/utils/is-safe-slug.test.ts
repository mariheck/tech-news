import { isSafeSlug } from '@/utils';
import { expect, test } from 'vitest';

test('isSafeSlug accepts a kebab-case slug', () => {
  expect(isSafeSlug('animations-css-scroll-driven')).toBe(true);
});

test('isSafeSlug accepts digits', () => {
  expect(isSafeSlug('next-js-16')).toBe(true);
});

test('isSafeSlug rejects a parent-directory traversal segment', () => {
  expect(isSafeSlug('..')).toBe(false);
});

test('isSafeSlug rejects an embedded path separator', () => {
  expect(isSafeSlug('../../etc/passwd')).toBe(false);
});

test('isSafeSlug rejects a forward slash', () => {
  expect(isSafeSlug('a/b')).toBe(false);
});

test('isSafeSlug rejects a dot (file extension trick)', () => {
  expect(isSafeSlug('index.md')).toBe(false);
});

test('isSafeSlug rejects uppercase letters', () => {
  expect(isSafeSlug('Frontend')).toBe(false);
});

test('isSafeSlug rejects an empty string', () => {
  expect(isSafeSlug('')).toBe(false);
});
