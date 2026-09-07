import { isMonthKey } from '@/utils';
import { expect, test } from 'vitest';

test('isMonthKey accepts a zero-padded year-month', () => {
  expect(isMonthKey('2026-04')).toBe(true);
});

// The route param can just as easily carry a full date, which formatMonth would
// silently read as its month rather than reject.
test('isMonthKey rejects a full ISO day', () => {
  expect(isMonthKey('2026-04-27')).toBe(false);
});

test('isMonthKey rejects an unpadded month', () => {
  expect(isMonthKey('2026-4')).toBe(false);
});

test('isMonthKey rejects a string that holds no date', () => {
  expect(isMonthKey('pas-un-mois')).toBe(false);
});

test('isMonthKey rejects a path traversal attempt', () => {
  expect(isMonthKey('../../etc')).toBe(false);
});
