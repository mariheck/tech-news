import { CATEGORIES } from '@/utils';
import { expect, test } from 'vitest';

test('CATEGORIES exposes the 5 editorial slugs in canonical order', () => {
  expect(CATEGORIES).toEqual([
    'frontend',
    'design',
    'dev-ia',
    'actus-ia',
    'autres'
  ]);
});
