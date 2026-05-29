import { listIssueDates } from '@/utils';
import { expect, test } from 'vitest';

// Reads the fixture issue tree under __tests__/fixtures/content (CONTENT_ROOT is
// pointed there in vitest.config.mts): three editions, most-recent-first.
test('listIssueDates returns the fixture issue folders sorted most-recent-first', async () => {
  expect(await listIssueDates()).toEqual([
    '2026-05-18',
    '2026-05-11',
    '2026-05-04'
  ]);
});

test('listIssueDates returns only YYYY-MM-DD folder names', async () => {
  const dates = await listIssueDates();
  expect(dates.length).toBeGreaterThan(0);
  for (const date of dates) {
    expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  }
});
