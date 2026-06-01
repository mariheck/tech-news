import { formatLongDate } from '@/utils';
import { expect, test } from 'vitest';

test('formatLongDate returns "<day> <month> <year>" in French', () => {
  expect(formatLongDate(new Date('2026-05-21T10:00:00Z'))).toBe('21 mai 2026');
});

test('formatLongDate omits leading zero on single-digit days', () => {
  expect(formatLongDate(new Date('2026-01-03T10:00:00Z'))).toBe(
    '3 janvier 2026'
  );
});

test('formatLongDate writes "1er" for the first day of the month', () => {
  expect(formatLongDate(new Date('2026-06-01T10:00:00Z'))).toBe(
    '1er juin 2026'
  );
});
