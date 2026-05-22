import ArchivesPage from '@/app/archives/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Archives page displays a weekly edition section', async () => {
  render(await ArchivesPage());
  expect(
    screen.getByRole('heading', { level: 2, name: /^Semaine du / })
  ).toBeInTheDocument();
});

test('Archives page displays an "Archives" eyebrow above the title', async () => {
  render(await ArchivesPage());
  const eyebrow = screen.getByText('Archives');
  expect(eyebrow).toBeInTheDocument();
  expect(eyebrow.tagName).toBe('P');
});

test('Archives page displays the page title as a level-1 heading', async () => {
  render(await ArchivesPage());
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Toutes les éditions, semaine après semaine.'
    })
  ).toBeInTheDocument();
});

test('Archives page renders a separator below the page header', async () => {
  render(await ArchivesPage());
  expect(screen.getByRole('separator')).toBeInTheDocument();
});
