import ArticlePage, { generateMetadata } from '@/app/[date]/[slug]/page';
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

beforeEach(() => {
  vi.mocked(loadArticle).mockResolvedValue(fixture);
});

test('ArticlePage renders the article title as a level-1 heading', async () => {
  render(
    await ArticlePage({
      params: validParams()
    })
  );
  expect(
    screen.getByRole('heading', { level: 1, name: 'Article fictif pour le test' })
  ).toBeInTheDocument();
});

test('ArticlePage renders the hero image with the article title as alt', async () => {
  render(
    await ArticlePage({
      params: validParams()
    })
  );
  const img = screen.getByRole('img', { name: 'Article fictif pour le test' });
  expect(img).toHaveAttribute('src', expect.stringContaining('test-slug.jpg'));
});

test('ArticlePage renders the category label over the hero image, not in the sidebar', async () => {
  render(
    await ArticlePage({
      params: validParams()
    })
  );
  const label = screen.getByText('Frontend');
  expect(label).toBeInTheDocument();
  const aside = screen.getByRole('complementary', {
    name: "Métadonnées de l'article"
  });
  expect(aside).not.toContainElement(label);
});

test('ArticlePage exposes the loaded article body — first paragraph from markdown', async () => {
  render(
    await ArticlePage({
      params: validParams()
    })
  );
  expect(
    screen.getByText('Première phrase du corps fictif.')
  ).toBeInTheDocument();
});

test('generateMetadata sets the bare article title so the layout template adds the brand', async () => {
  const meta = await generateMetadata({
    params: validParams()
  });
  expect(meta.title).toBe('Article fictif pour le test');
  expect(meta.description).toBe('Excerpt fictif.');
});

test('generateMetadata sets the canonical URL to the article path', async () => {
  const meta = await generateMetadata({
    params: validParams()
  });
  expect(meta.alternates?.canonical).toBe('/2026-05-18/test-slug');
});

test('generateMetadata enriches OpenGraph with url, publishedTime and section', async () => {
  const meta = await generateMetadata({
    params: validParams()
  });
  expect(meta.openGraph).toMatchObject({
    type: 'article',
    url: '/2026-05-18/test-slug',
    title: 'Article fictif pour le test',
    publishedTime: '2026-05-18T00:00:00.000Z',
    section: 'Frontend'
  });
});

test('generateMetadata sets a summary_large_image Twitter card with the hero image', async () => {
  const meta = await generateMetadata({
    params: validParams()
  });
  expect(meta.twitter).toMatchObject({
    card: 'summary_large_image',
    title: 'Article fictif pour le test',
    images: ['/images/2026-05-18/test-slug.jpg']
  });
});

test('generateMetadata omits OpenGraph/Twitter description so they inherit the excerpt', async () => {
  const meta = await generateMetadata({
    params: validParams()
  });
  expect(meta.openGraph).not.toHaveProperty('description');
  expect(meta.twitter).not.toHaveProperty('description');
});

test('generateMetadata returns empty metadata for a malformed date', async () => {
  const meta = await generateMetadata({
    params: Promise.resolve({ date: 'not-a-date', slug: 'test-slug' })
  });
  expect(meta).toEqual({});
});

test('ArticlePage calls notFound() when the date param is malformed', async () => {
  const { notFound } = await import('next/navigation');
  vi.mocked(notFound).mockClear();
  await expect(
    ArticlePage({
      params: Promise.resolve({ date: 'not-a-date', slug: 'test-slug' })
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
      params: Promise.resolve({ date: '2026-05-18', slug: 'unknown' })
    })
  ).rejects.toThrow('NEXT_NOT_FOUND');
  expect(notFound).toHaveBeenCalled();
});
