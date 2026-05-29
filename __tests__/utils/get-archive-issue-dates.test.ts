import { getArchiveIssueDates, listIssueDates } from '@/utils';
import { expect, test } from 'vitest';

test('getArchiveIssueDates returns every issue except the latest', async () => {
  const all = await listIssueDates();
  const archives = await getArchiveIssueDates();
  expect(archives).toEqual(all.slice(1));
});

test('getArchiveIssueDates keeps the most-recent-first ordering', async () => {
  const archives = await getArchiveIssueDates();
  const sortedDescending = [...archives].sort((a, b) => b.localeCompare(a));
  expect(archives).toEqual(sortedDescending);
});
