import { getLastIssueDate, listIssueDates } from '@/utils';
import { expect, test } from 'vitest';

test('getLastIssueDate returns the chronologically most-recent issue date', async () => {
  const dates = await listIssueDates();
  const latest = [...dates].sort((a, b) => b.localeCompare(a))[0];
  expect(await getLastIssueDate()).toBe(latest);
});

test('getLastIssueDate returns a YYYY-MM-DD string when issues exist', async () => {
  expect(await getLastIssueDate()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
});
