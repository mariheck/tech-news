import { listMonthIssueDates } from '@/utils';
import { expect, test } from 'vitest';

const dates = ['2026-05-11', '2026-05-04', '2026-04-27'];

test('listMonthIssueDates returns the dates that fall in the month', () => {
  expect(listMonthIssueDates(dates, '2026-05')).toEqual([
    '2026-05-11',
    '2026-05-04'
  ]);
});

test('listMonthIssueDates returns nothing for a month with no date', () => {
  expect(listMonthIssueDates(dates, '2026-03')).toEqual([]);
});
