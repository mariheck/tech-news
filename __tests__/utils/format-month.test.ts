import { formatMonth } from '@/utils';
import { expect, test } from 'vitest';

// Natural sentence case: the month is a French common noun, so the label stays
// lowercase and any capital is applied by CSS at the call site.
test('formatMonth renders the month and its year in French', () => {
  expect(formatMonth('2026-08')).toBe('août 2026');
});

test('formatMonth reads the month in UTC, not the local timezone', () => {
  expect(formatMonth('2026-01')).toBe('janvier 2026');
});
