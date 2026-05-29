export const getExpectedLastMonday = (): Date => {
  const today = new Date();
  const isoDay = today.getUTCDay() || 7; // 1 = Monday … 7 = Sunday

  const lastMonday = new Date(today);
  // Step back to the Monday of the previous week.
  lastMonday.setUTCDate(today.getUTCDate() - (isoDay + 6));
  lastMonday.setUTCHours(0, 0, 0, 0);

  return lastMonday;
};
