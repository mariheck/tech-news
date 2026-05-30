import { FullArticle } from '@/components/article';
import type { Article } from '@/types';
import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  usePathname: () => '/2026-05-18/next-js-16'
}));

const baseArticle: Article = {
  slug: 'next-js-16',
  title: 'Next.js 16, tour de la release',
  excerpt: 'Turbopack stable par défaut.',
  summary: 'Vercel publie Next.js 16 avec Turbopack stable.',
  image: '/images/2026-05-18/next-js-16.jpg',
  date: new Date('2026-05-18T00:00:00Z'),
  readingTime: 8,
  category: 'frontend',
  sources: [
    { label: 'Next.js 16 release notes', url: 'nextjs.org/blog/next-16' }
  ],
  content: '# Next.js 16\n\nVercel a publié Next.js 16 mardi soir.'
};

test('FullArticle renders an <article> element', () => {
  const { container } = render(<FullArticle article={baseArticle} backHref='/' />);
  expect(container.querySelector('article')).not.toBeNull();
});

test('FullArticle sets --accent and --accent-light from the category accent', () => {
  const { container } = render(<FullArticle article={baseArticle} backHref='/' />);
  const article = container.querySelector('article');
  const style = article?.getAttribute('style') ?? '';
  expect(style).toMatch(/--accent:\s*var\(--color-accent-turquoise\)/);
  expect(style).toMatch(/--accent-light:\s*var\(--color-accent-turquoise-light\)/);
});

test('FullArticle marks the <article> with a data-accent for the category accent', () => {
  const { container } = render(<FullArticle article={baseArticle} backHref='/' />);
  const article = container.querySelector('article');
  expect(article?.getAttribute('data-accent')).toBe('turquoise');
});

test('FullArticle renders MainInfo with the sticky desktop classes wired in', () => {
  const { container } = render(<FullArticle article={baseArticle} backHref='/' />);
  const aside = container.querySelector('aside');
  expect(aside?.className).toContain('md:sticky');
  expect(aside?.className).toContain('md:top-28');
});

test('FullArticle renders the article hero image once', () => {
  render(<FullArticle article={baseArticle} backHref='/' />);
  expect(
    screen.getAllByRole('img', { name: /Next\.js 16/i })
  ).toHaveLength(1);
});

test('FullArticle surfaces the sources list on mobile below the body', () => {
  const { container } = render(<FullArticle article={baseArticle} backHref='/' />);
  // Two instances of Sources: one inside the aside (hidden md:flex), one as a
  // direct child of <article> with md:hidden — the latter has a top border.
  const articleEl = container.querySelector('article')!;
  const mobileSources = Array.from(articleEl.children).find(
    (child) =>
      child.tagName !== 'ASIDE' &&
      child.className.includes('md:hidden') &&
      child.className.includes('border-t')
  );
  expect(mobileSources).toBeDefined();
});
