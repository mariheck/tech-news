import { toIsoDay } from '@/utils';
import { expect, test } from 'vitest';

test('toIsoDay formats a Date as YYYY-MM-DD', () => {
  expect(toIsoDay(new Date('2026-05-18T00:00:00Z'))).toBe('2026-05-18');
});

test('toIsoDay uses the UTC calendar day', () => {
  expect(toIsoDay(new Date('2026-05-18T23:59:00Z'))).toBe('2026-05-18');
});
