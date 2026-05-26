import ArchivesPage from '@/app/archives/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const emptySearchParams = Promise.resolve({});
const designParams = Promise.resolve({ cat: 'design' });

test('Archives page displays a weekly edition section', async () => {
  render(await ArchivesPage({ searchParams: emptySearchParams }));
  expect(
    screen.getByRole('heading', { level: 2, name: /^Semaine du / })
  ).toBeInTheDocument();
});

test('Archives page displays an "Archives" eyebrow above the title', async () => {
  render(await ArchivesPage({ searchParams: emptySearchParams }));
  const eyebrow = screen.getByText('Archives');
  expect(eyebrow).toBeInTheDocument();
  expect(eyebrow.tagName).toBe('P');
});

test('Archives page displays the page title as a level-1 heading', async () => {
  render(await ArchivesPage({ searchParams: emptySearchParams }));
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Toutes les éditions, semaine après semaine.'
    })
  ).toBeInTheDocument();
});

test('Archives page mounts the CategoryFilter pointing back to /archives', async () => {
  render(await ArchivesPage({ searchParams: emptySearchParams }));
  const tous = screen.getByRole('link', { name: 'Tous' });
  expect(tous).toHaveAttribute('href', '/archives');
  expect(tous).toHaveAttribute('aria-current', 'page');
});

test('Archives page marks the active category from ?cat=design', async () => {
  render(await ArchivesPage({ searchParams: designParams }));
  expect(screen.getByRole('link', { name: 'Design' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});
