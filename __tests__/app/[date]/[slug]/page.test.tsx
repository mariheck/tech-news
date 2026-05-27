import ArticlePage from '@/app/[date]/[slug]/page';
import type { Article } from '@/types';
import { loadArticle } from '@/utils';
import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
  usePathname: () => '/2026-05-18/test-slug'
}));

vi.mock('@/utils', async () => {
  const actual = await vi.importActual<typeof import('@/utils')>('@/utils');
  return {
    ...actual,
    loadArticle: vi.fn()
  };
});

const fixture: Article = {
  slug: 'test-slug',
  title: 'Article fictif pour le test',
  excerpt: 'Excerpt fictif.',
  summary: 'Résumé fictif rendu dans la sidebar.',
  image: '/images/2026-05-18/test-slug.jpg',
  date: new Date('2026-05-18T00:00:00Z'),
  readingTime: 5,
  category: 'frontend',
  sources: [{ label: 'Source fictive', url: 'example.com/fake' }],
  content: '# Article fictif pour le test\n\nPremière phrase du corps fictif.'
};

const validParams = () =>
  Promise.resolve({ date: '2026-05-18', slug: 'test-slug' });
const noSearchParams = () => Promise.resolve({});

beforeEach(() => {
  vi.mocked(loadArticle).mockResolvedValue(fixture);
});

test('ArticlePage renders the article title as a level-1 heading', async () => {
  render(
    await ArticlePage({
      params: validParams(),
      searchParams: noSearchParams()
    })
  );
  expect(
    screen.getByRole('heading', { level: 1, name: 'Article fictif pour le test' })
  ).toBeInTheDocument();
});

test('ArticlePage renders the hero image with the article title as alt', async () => {
  render(
    await ArticlePage({
      params: validParams(),
      searchParams: noSearchParams()
    })
  );
  const img = screen.getByRole('img', { name: 'Article fictif pour le test' });
  expect(img).toHaveAttribute('src', expect.stringContaining('test-slug.jpg'));
});

test('ArticlePage renders the category badge in the sidebar landmark', async () => {
  render(
    await ArticlePage({
      params: validParams(),
      searchParams: noSearchParams()
    })
  );
  const aside = screen.getByRole('complementary', {
    name: "Métadonnées de l'article"
  });
  expect(aside.textContent).toContain('Frontend');
});

test('ArticlePage exposes the loaded article body — first paragraph from markdown', async () => {
  render(
    await ArticlePage({
      params: validParams(),
      searchParams: noSearchParams()
    })
  );
  expect(
    screen.getByText('Première phrase du corps fictif.')
  ).toBeInTheDocument();
});

test('ArticlePage points the back link to / when no from search param is provided', async () => {
  render(
    await ArticlePage({
      params: validParams(),
      searchParams: noSearchParams()
    })
  );
  expect(screen.getByRole('link', { name: /Retour/ })).toHaveAttribute(
    'href',
    '/'
  );
});

test('ArticlePage points the back link to /archives when from=archives is set', async () => {
  render(
    await ArticlePage({
      params: validParams(),
      searchParams: Promise.resolve({ from: 'archives' })
    })
  );
  expect(screen.getByRole('link', { name: /Retour/ })).toHaveAttribute(
    'href',
    '/archives'
  );
});

test('ArticlePage falls back to / when from is an unknown value', async () => {
  render(
    await ArticlePage({
      params: validParams(),
      searchParams: Promise.resolve({ from: 'someplace' })
    })
  );
  expect(screen.getByRole('link', { name: /Retour/ })).toHaveAttribute(
    'href',
    '/'
  );
});

test('ArticlePage calls notFound() when the date param is malformed', async () => {
  const { notFound } = await import('next/navigation');
  vi.mocked(notFound).mockClear();
  await expect(
    ArticlePage({
      params: Promise.resolve({ date: 'not-a-date', slug: 'test-slug' }),
      searchParams: noSearchParams()
    })
  ).rejects.toThrow('NEXT_NOT_FOUND');
  expect(notFound).toHaveBeenCalled();
});

test('ArticlePage calls notFound() when loadArticle rejects (unknown slug)', async () => {
  const { notFound } = await import('next/navigation');
  vi.mocked(notFound).mockClear();
  vi.mocked(loadArticle).mockRejectedValueOnce(new Error('ENOENT'));
  await expect(
    ArticlePage({
      params: Promise.resolve({ date: '2026-05-18', slug: 'unknown' }),
      searchParams: noSearchParams()
    })
  ).rejects.toThrow('NEXT_NOT_FOUND');
  expect(notFound).toHaveBeenCalled();
});
