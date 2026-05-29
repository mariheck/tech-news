import ArchivesPage from '@/app/archives/page';
import { getArchiveIssueDates } from '@/utils';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const emptySearchParams = Promise.resolve({});
const designParams = Promise.resolve({ cat: 'design' });

test('Archives page renders one weekly edition per archived issue, or an empty notice when there are none', async () => {
  // The archives depend on how many issues exist on disk (every issue except
  // the latest, which is the home headline). Assert against that count rather
  // than a fixed number, so the test stays green whatever the content holds.
  const archiveCount = (await getArchiveIssueDates()).length;
  render(await ArchivesPage({ searchParams: emptySearchParams }));

  if (archiveCount > 0) {
    const editions = screen.getAllByRole('heading', {
      level: 2,
      name: /^Semaine du /
    });
    expect(editions).toHaveLength(archiveCount);
  } else {
    expect(
      screen.queryByRole('heading', { level: 2, name: /^Semaine du / })
    ).not.toBeInTheDocument();
    expect(
      screen.getByText('Aucun article disponible pour le moment.')
    ).toBeInTheDocument();
  }
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
