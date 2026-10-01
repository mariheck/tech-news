import { getMonthHref } from '@/utils';
import { expect, test } from 'vitest';

test('getMonthHref points at the month route', () => {
  expect(getMonthHref({ month: '2026-08' })).toBe('/archives/2026-08');
});

test('getMonthHref carries the active category over as a search param', () => {
  expect(getMonthHref({ month: '2026-08', category: 'design' })).toBe(
    '/archives/2026-08?cat=design'
  );
});
