import { getArchiveIssueDates } from '@/server';
import { expect, test } from 'vitest';

// Backed by the fixture issue tree under __tests__/fixtures/content (CONTENT_ROOT
// is pointed there in vitest.config.mts): three editions, so archives drop the
// latest (2026-05-18) and keep the rest, most-recent-first.
test('getArchiveIssueDates returns every issue except the latest', async () => {
  expect(await getArchiveIssueDates()).toEqual(['2026-05-11', '2026-05-04']);
});
