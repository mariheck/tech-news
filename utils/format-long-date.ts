export const formatLongDate = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
    .formatToParts(date)
    .map((part) =>
      part.type === 'day' && part.value === '1' ? '1er' : part.value
    )
    .join('');
};
