import ArchiveMonthPage, {
  generateMetadata,
  generateStaticParams
} from '@/app/archives/[month]/page';
import { render, screen, within } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  })
}));

// Backed by the fixture issue tree (CONTENT_ROOT points there in
// vitest.config.mts): the archive months are 2026-05 and 2026-04.
const params = (month: string) => Promise.resolve({ month });
const noSearchParams = Promise.resolve({});

test('generateStaticParams lists every archive month', async () => {
  expect(await generateStaticParams()).toEqual([
    { month: '2026-05' },
    { month: '2026-04' }
  ]);
});

test('Month page titles itself with the month it shows', async () => {
  const meta = await generateMetadata({ params: params('2026-04') });
  expect(meta.title).toBe('Archives - avril 2026');
});

test('Month page describes the editions it holds', async () => {
  const meta = await generateMetadata({ params: params('2026-04') });
  expect(meta.description).toBe(
    'Les éditions hebdomadaires de tech.news publiées en avril 2026.'
  );
});

test('Month page canonicalises to its own route', async () => {
  const meta = await generateMetadata({ params: params('2026-04') });
  expect(meta.alternates?.canonical).toBe('/archives/2026-04');
});

// /archives only redirects here, so the most recent month holds its own
// canonical like any other month.
test('The most recent archived month canonicalises to its own route', async () => {
  const meta = await generateMetadata({ params: params('2026-05') });
  expect(meta.alternates?.canonical).toBe('/archives/2026-05');
});

test('Month page renders the weekly editions of that month only', async () => {
  render(
    await ArchiveMonthPage({
      params: params('2026-04'),
      searchParams: noSearchParams
    })
  );
  expect(
    screen.getAllByRole('heading', { level: 2, name: /^Semaine du / })
  ).toHaveLength(1);
});

test('Month page points the category filter back at its own route', async () => {
  render(
    await ArchiveMonthPage({
      params: params('2026-04'),
      searchParams: noSearchParams
    })
  );
  expect(screen.getByRole('link', { name: 'Tous' })).toHaveAttribute(
    'href',
    '/archives/2026-04'
  );
});

test('Month page shows the month it renders on the menu trigger', async () => {
  render(
    await ArchiveMonthPage({
      params: params('2026-04'),
      searchParams: noSearchParams
    })
  );
  expect(
    screen.getByRole('button', { name: 'Mois affiché : avril 2026' })
  ).toBeInTheDocument();
});

// The month menu links to the same targets, so the step is read inside the
// bottom navigation landmark rather than across the whole page.
test('Month page links back to the more recent month', async () => {
  render(
    await ArchiveMonthPage({
      params: params('2026-04'),
      searchParams: noSearchParams
    })
  );
  const nav = screen.getByRole('navigation', {
    name: 'Naviguer entre les mois'
  });
  expect(
    within(nav).getByRole('link', { name: 'Page suivante, mai 2026' })
  ).toHaveAttribute('href', '/archives/2026-05');
});

test('Month page keeps the active category on the month links', async () => {
  render(
    await ArchiveMonthPage({
      params: params('2026-04'),
      searchParams: Promise.resolve({ cat: 'frontend' })
    })
  );
  const nav = screen.getByRole('navigation', {
    name: 'Naviguer entre les mois'
  });
  expect(
    within(nav).getByRole('link', { name: 'Page suivante, mai 2026' })
  ).toHaveAttribute('href', '/archives/2026-05?cat=frontend');
});

test('Month page 404s on a value that is not a month key', async () => {
  await expect(
    ArchiveMonthPage({
      params: params('2026-04-27'),
      searchParams: noSearchParams
    })
  ).rejects.toThrow('NEXT_NOT_FOUND');
});

test('Month page 404s on a month with no archived edition', async () => {
  await expect(
    ArchiveMonthPage({
      params: params('2026-03'),
      searchParams: noSearchParams
    })
  ).rejects.toThrow('NEXT_NOT_FOUND');
});
