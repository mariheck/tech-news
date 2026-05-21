import { formatWeekRange } from '@/utils';
import { expect, test } from 'vitest';

test('formatWeekRange returns "Semaine du J au J mois année" when both bounds share a month', () => {
  expect(formatWeekRange(new Date('2026-05-18T10:00:00Z'))).toBe(
    'Semaine du 18 au 24 mai 2026'
  );
});

test('formatWeekRange repeats the month when the week straddles two months', () => {
  expect(formatWeekRange(new Date('2026-04-27T10:00:00Z'))).toBe(
    'Semaine du 27 avril au 3 mai 2026'
  );
});

test('formatWeekRange repeats month and year when the week straddles two years', () => {
  expect(formatWeekRange(new Date('2026-12-28T10:00:00Z'))).toBe(
    'Semaine du 28 décembre 2026 au 3 janvier 2027'
  );
});
