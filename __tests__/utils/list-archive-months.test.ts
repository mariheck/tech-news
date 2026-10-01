import { listArchiveMonths } from '@/utils';
import { expect, test } from 'vitest';

test('listArchiveMonths returns the distinct months of the dates, most-recent-first', () => {
  expect(listArchiveMonths(['2026-05-11', '2026-05-04', '2026-04-27'])).toEqual(
    ['2026-05', '2026-04']
  );
});
