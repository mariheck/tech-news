import { toMonthKey } from '@/utils';
import { expect, test } from 'vitest';

test('toMonthKey keeps the year and month of an ISO day', () => {
  expect(toMonthKey('2026-08-17')).toBe('2026-08');
});

test('toMonthKey keeps the leading zero of a single-digit month', () => {
  expect(toMonthKey('2026-04-27')).toBe('2026-04');
});
