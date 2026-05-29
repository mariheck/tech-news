import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';

// Backed by the fixture issue tree under __tests__/fixtures/content (CONTENT_ROOT
// is pointed there in vitest.config.mts): the latest edition is 2026-05-18. The
// clock is frozen to the following week so getExpectedLastMonday() resolves to
// that same Monday, making the "semaine dernière" heading deterministic.
const emptySearchParams = Promise.resolve({});
const designParams = Promise.resolve({ cat: 'design' });

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-05-28T10:00:00Z')); // Thursday after 2026-05-18
});

afterEach(() => {
  vi.useRealTimers();
});

test('Home page displays the section heading for the latest edition', async () => {
  render(await Home({ searchParams: emptySearchParams }));
  expect(
    screen.getByRole('heading', {
      level: 2,
      name: 'Les actus de la semaine dernière'
    })
  ).toBeInTheDocument();
});

test('Home page displays a display-level page heading', async () => {
  render(await Home({ searchParams: emptySearchParams }));
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'L’essentiel de la tech, chaque lundi.'
    })
  ).toBeInTheDocument();
});

test('Home page mounts the CategoryFilter with "Tous" active by default', async () => {
  render(await Home({ searchParams: emptySearchParams }));
  const nav = screen.getByRole('navigation', { name: 'Filtrer par catégorie' });
  expect(nav).toBeInTheDocument();

  const tous = screen.getByRole('link', { name: 'Tous' });
  expect(tous).toHaveAttribute('aria-current', 'page');
  expect(tous).toHaveAttribute('href', '/');
});

test('Home page marks the active category from ?cat=design', async () => {
  render(await Home({ searchParams: designParams }));
  expect(screen.getByRole('link', { name: 'Design' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});

test('Home page ignores an invalid ?cat= value and treats "Tous" as active', async () => {
  render(await Home({ searchParams: Promise.resolve({ cat: 'web-dev' }) }));
  expect(screen.getByRole('link', { name: 'Tous' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});
