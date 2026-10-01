import { MonthNavigation } from '@/features/archive';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

// Most-recent-first, as `listArchiveMonths()` returns them.
const commonProps = {
  months: ['2026-05', '2026-04', '2026-03'],
  currentMonth: '2026-04'
};

const currentPage = () =>
  screen
    .getAllByRole('link')
    .find((link) => link.getAttribute('aria-current') === 'page');

test('MonthNavigation renders a nav landmark for the months', () => {
  render(<MonthNavigation {...commonProps} />);
  expect(
    screen.getByRole('navigation', { name: 'Naviguer entre les mois' })
  ).toBeInTheDocument();
});

test('MonthNavigation numbers the months from the oldest one', () => {
  render(<MonthNavigation {...commonProps} currentMonth='2026-03' />);
  expect(currentPage()).toHaveAccessibleName('Page 1, mars 2026');
});

test('MonthNavigation starts on the month it shows', () => {
  render(<MonthNavigation {...commonProps} />);
  expect(currentPage()).toHaveAccessibleName('Page 2, avril 2026');
});

test('MonthNavigation links each month to its archive page', () => {
  render(<MonthNavigation {...commonProps} />);
  expect(
    screen.getByRole('link', { name: 'Page suivante, mai 2026' })
  ).toHaveAttribute('href', '/archives/2026-05');
});

test('MonthNavigation keeps the active category on the month links', () => {
  render(<MonthNavigation {...commonProps} activeCategory='frontend' />);
  expect(
    screen.getByRole('link', { name: 'Page précédente, mars 2026' })
  ).toHaveAttribute('href', '/archives/2026-03?cat=frontend');
});
