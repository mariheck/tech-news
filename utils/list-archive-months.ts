import { toMonthKey } from './to-month-key';

// The distinct months the archives paginate over, most-recent-first. Fed with
// getArchiveIssueDates(), so the headline edition never opens a month of its own.
export const listArchiveMonths = (dates: string[]): string[] => {
  return [...new Set(dates.map(toMonthKey))];
};
