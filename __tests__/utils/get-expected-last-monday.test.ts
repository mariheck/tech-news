import { getExpectedLastMonday } from '@/utils';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test('getExpectedLastMonday returns the Monday of the previous week for a mid-week date', () => {
  vi.setSystemTime(new Date('2026-05-28T10:30:00Z')); // Thursday
  expect(getExpectedLastMonday()).toEqual(new Date('2026-05-18T00:00:00Z'));
});

test('getExpectedLastMonday treats the current Monday as this week and returns the prior Monday', () => {
  vi.setSystemTime(new Date('2026-05-18T09:00:00Z')); // Monday
  expect(getExpectedLastMonday()).toEqual(new Date('2026-05-11T00:00:00Z'));
});

test('getExpectedLastMonday treats Sunday as the end of the current ISO week', () => {
  vi.setSystemTime(new Date('2026-05-24T23:00:00Z')); // Sunday
  expect(getExpectedLastMonday()).toEqual(new Date('2026-05-11T00:00:00Z'));
});

test('getExpectedLastMonday normalizes to UTC midnight regardless of the current time of day', () => {
  vi.setSystemTime(new Date('2026-05-28T23:59:59.500Z'));
  const result = getExpectedLastMonday();
  expect(result.toISOString()).toBe('2026-05-18T00:00:00.000Z');
  expect(result.getUTCDay()).toBe(1);
});
