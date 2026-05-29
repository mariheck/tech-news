import { listIssueDates } from './list-issue-dates';

export const getLastIssueDate = async (): Promise<string | null> => {
  const [latest] = await listIssueDates();
  return latest ?? null;
};
