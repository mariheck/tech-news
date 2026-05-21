const dayFmt = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  timeZone: 'UTC'
});

const dayMonthFmt = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC'
});

const dayMonthYearFmt = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC'
});

export const formatWeekRange = (weekStart: Date): string => {
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekEnd.getUTCDate() + 6);

  const sameYear = weekStart.getUTCFullYear() === weekEnd.getUTCFullYear();
  const sameMonth =
    sameYear && weekStart.getUTCMonth() === weekEnd.getUTCMonth();

  if (sameMonth) {
    return `Semaine du ${dayFmt.format(weekStart)} au ${dayMonthYearFmt.format(weekEnd)}`;
  }
  if (sameYear) {
    return `Semaine du ${dayMonthFmt.format(weekStart)} au ${dayMonthYearFmt.format(weekEnd)}`;
  }
  return `Semaine du ${dayMonthYearFmt.format(weekStart)} au ${dayMonthYearFmt.format(weekEnd)}`;
};
