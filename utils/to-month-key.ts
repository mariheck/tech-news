/**
 * Narrows an ISO day (`YYYY-MM-DD`) to its month (`YYYY-MM`).
 */
export const toMonthKey = (isoDay: string): string => {
  return isoDay.slice(0, 7);
};
