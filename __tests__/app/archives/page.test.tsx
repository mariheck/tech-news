import ArchivesPage, { metadata } from '@/app/archives/page';
import { getArchiveIssueDates } from '@/server';
import { render, screen } from '@testing-library/react';
import { redirect } from 'next/navigation';
import { expect, test, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(() => {
    throw new Error('NEXT_REDIRECT');
  })
}));

// The spy wraps the real loader, so the redirect reads the fixture tree and only
// the empty-archive test hands it a date list of its own.
vi.mock('@/server', async () => {
  const actual = await vi.importActual<typeof import('@/server')>('@/server');
  return {
    ...actual,
    getArchiveIssueDates: vi.fn(actual.getArchiveIssueDates)
  };
});

test('Archives page sets a bare title and its own canonical', () => {
  expect(metadata.title).toBe('Archives');
  expect(metadata.alternates?.canonical).toBe('/archives');
});

const noSearchParams = Promise.resolve({});

// Backed by the fixture issue tree (CONTENT_ROOT points there in
// vitest.config.mts): four editions across two archive months, 2026-05 being
// the most recent.
test('Archives sends the reader to the most recent archived month', async () => {
  await expect(ArchivesPage({ searchParams: noSearchParams })).rejects.toThrow(
    'NEXT_REDIRECT'
  );
  expect(redirect).toHaveBeenCalledWith('/archives/2026-05');
});

test('Archives carries the active category over to its redirect', async () => {
  await expect(
    ArchivesPage({ searchParams: Promise.resolve({ cat: 'design' }) })
  ).rejects.toThrow('NEXT_REDIRECT');
  expect(redirect).toHaveBeenLastCalledWith('/archives/2026-05?cat=design');
});

test('Archives drops an unknown category from its redirect', async () => {
  await expect(
    ArchivesPage({ searchParams: Promise.resolve({ cat: 'inconnue' }) })
  ).rejects.toThrow('NEXT_REDIRECT');
  expect(redirect).toHaveBeenLastCalledWith('/archives/2026-05');
});

test('Archives stays on an empty archive while no month is archived', async () => {
  vi.mocked(getArchiveIssueDates).mockResolvedValueOnce([]);
  render(await ArchivesPage({ searchParams: noSearchParams }));
  expect(
    screen.getByText('Aucun article disponible pour le moment.')
  ).toBeInTheDocument();
});

test('Archives marks the active category on an empty archive', async () => {
  vi.mocked(getArchiveIssueDates).mockResolvedValueOnce([]);
  render(
    await ArchivesPage({ searchParams: Promise.resolve({ cat: 'design' }) })
  );
  expect(screen.getByRole('link', { name: 'Design' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});
