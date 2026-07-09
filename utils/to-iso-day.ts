/**
 * Formats a Date as its UTC calendar day (YYYY-MM-DD)
 */
export const toIsoDay = (date: Date): string => {
  return date.toISOString().slice(0, 10);
};
