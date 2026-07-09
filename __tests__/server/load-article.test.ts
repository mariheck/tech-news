import { beforeAll, expect, test } from 'vitest';
import type { Article } from '@/types';
import { loadArticle } from '@/server';

// Reads the fixture issue tree under __tests__/fixtures/content (CONTENT_ROOT is
// pointed there in vitest.config.mts), never the live content/ directory.
let article: Article;

beforeAll(async () => {
  article = await loadArticle('2026-05-18', 'fixture-alpha');
});

test('loadArticle reads frontmatter title and excerpt', () => {
  expect(article.title).toBe('Fixture Alpha : un titre de test pour le loader');
  expect(article.excerpt).toMatch(/^Excerpt de fixture alpha/);
});

test('loadArticle reads the summary chapeau paragraph', () => {
  expect(article.summary).toMatch(/^Résumé de fixture alpha/);
});

test('loadArticle reads reading_time as readingTime (number)', () => {
  expect(article.readingTime).toBe(7);
});

test('loadArticle reads the ISO date as a Date instance', () => {
  expect(article.date).toEqual(new Date('2026-05-18T00:00:00Z'));
});

test('loadArticle reads the category slug', () => {
  expect(article.category).toBe('frontend');
});

test('loadArticle reads the sources flow sequence', () => {
  expect(article.sources).toHaveLength(2);
  expect(article.sources[0]).toEqual({
    label: 'Source alpha un',
    url: 'example.com/alpha-1'
  });
});

test('loadArticle resolves the image path by convention', () => {
  expect(article.image).toBe('/images/2026-05-18/fixture-alpha.jpg');
});

test('loadArticle exposes the markdown body via content', () => {
  expect(article.content).toContain('Corps de fixture alpha');
});

test('loadArticle rejects for an unknown slug', async () => {
  await expect(loadArticle('2026-05-18', 'does-not-exist')).rejects.toThrow();
});

test('loadArticle rejects a slug with a path-traversal segment', async () => {
  await expect(
    loadArticle('2026-05-18', '../../../etc/passwd')
  ).rejects.toThrow(/invalid slug/i);
});

test('loadArticle rejects a non-ISO date before touching the filesystem', async () => {
  await expect(loadArticle('../../etc', 'fixture-alpha')).rejects.toThrow(
    /invalid date/i
  );
});
