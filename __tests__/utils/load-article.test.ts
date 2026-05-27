import { beforeAll, expect, test } from 'vitest';
import type { Article } from '@/types';
import { loadArticle } from '@/utils';

let article: Article;

beforeAll(async () => {
  article = await loadArticle('2026-05-18', 'next-js-16');
});

test('loadArticle reads frontmatter title and excerpt', () => {
  expect(article.title).toBe(
    'Next.js 16, tour de la release : breaking changes et impact migration'
  );
  expect(article.excerpt).toMatch(/^Turbopack stable/);
});

test('loadArticle reads the summary chapeau paragraph', () => {
  expect(article.summary).toMatch(/^Vercel publie Next.js 16/);
});

test('loadArticle reads reading_time as readingTime (number)', () => {
  expect(article.readingTime).toBe(8);
});

test('loadArticle reads the ISO date as a Date instance', () => {
  expect(article.date).toEqual(new Date('2026-05-18T00:00:00Z'));
});

test('loadArticle reads the category slug', () => {
  expect(article.category).toBe('frontend');
});

test('loadArticle reads the sources flow sequence', () => {
  expect(article.sources).toHaveLength(3);
  expect(article.sources[0]).toEqual({
    label: 'Next.js 16 release notes',
    url: 'nextjs.org/blog/next-16'
  });
});

test('loadArticle resolves the image path by convention', () => {
  expect(article.image).toBe('/images/2026-05-18/next-js-16.jpg');
});

test('loadArticle exposes the markdown body via content', () => {
  expect(article.content).toContain('Vercel a publié Next.js 16');
});

test('loadArticle rejects for an unknown slug', async () => {
  await expect(loadArticle('2026-05-18', 'does-not-exist')).rejects.toThrow();
});
