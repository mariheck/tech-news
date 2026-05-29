import { getLastIssueDate } from '@/utils';
import { expect, test } from 'vitest';

// Backed by the fixture issue tree under __tests__/fixtures/content (CONTENT_ROOT
// is pointed there in vitest.config.mts): the latest edition is 2026-05-18.
test('getLastIssueDate returns the chronologically most-recent issue date', async () => {
  expect(await getLastIssueDate()).toBe('2026-05-18');
});

test('getLastIssueDate returns a YYYY-MM-DD string when issues exist', async () => {
  expect(await getLastIssueDate()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
});
