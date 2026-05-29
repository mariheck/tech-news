import { listIssueDates } from './list-issue-dates';

// Archives list every issue except the latest one, which is the headline
// edition already featured on the home page (see getLastIssueDate). Both read
// the most-recent-first ordering of listIssueDates, so dropping index 0 here
// stays in sync with the home page taking index 0.
export const getArchiveIssueDates = async (): Promise<string[]> => {
  const dates = await listIssueDates();
  return dates.slice(1);
};
