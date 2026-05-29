import { listIssueDates } from '@/utils';
import { expect, test } from 'vitest';

test('listIssueDates returns issue folder names sorted most-recent-first', async () => {
  const dates = await listIssueDates();
  const sortedDescending = [...dates].sort((a, b) => b.localeCompare(a));
  expect(dates).toEqual(sortedDescending);
});

test('listIssueDates returns only YYYY-MM-DD folder names', async () => {
  const dates = await listIssueDates();
  expect(dates.length).toBeGreaterThan(0);
  for (const date of dates) {
    expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  }
});
