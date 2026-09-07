import { toMonthKey } from './to-month-key';

export const listMonthIssueDates = (
  dates: string[],
  month: string
): string[] => {
  return dates.filter((date) => toMonthKey(date) === month);
};
