import { isCategorySlug } from '@/utils';
import { expect, test } from 'vitest';

test('isCategorySlug accepts each of the 4 canonical slugs', () => {
  expect(isCategorySlug('frontend')).toBe(true);
  expect(isCategorySlug('design')).toBe(true);
  expect(isCategorySlug('dev-ia')).toBe(true);
  expect(isCategorySlug('actus-ia')).toBe(true);
});

test('isCategorySlug rejects undefined and empty string', () => {
  expect(isCategorySlug(undefined)).toBe(false);
  expect(isCategorySlug('')).toBe(false);
});

test('isCategorySlug rejects unknown or mis-cased values', () => {
  expect(isCategorySlug('TOUS')).toBe(false);
  expect(isCategorySlug('frontEnd')).toBe(false);
  expect(isCategorySlug('web-dev')).toBe(false);
  expect(isCategorySlug('foo')).toBe(false);
});
