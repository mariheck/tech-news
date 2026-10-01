const monthFormat = new Intl.DateTimeFormat('fr-FR', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC'
});

/**
 * Formats a month key (`YYYY-MM`) as `août 2026`. Sentence case is left to the
 * call site: French month names are common nouns.
 */
export const formatMonth = (monthKey: string): string => {
  const [year, month] = monthKey.split('-').map(Number);
  const utcDate = Date.UTC(year, month - 1, 1);
  const formattedMonth = monthFormat.format(new Date(utcDate));
  return formattedMonth;
};
