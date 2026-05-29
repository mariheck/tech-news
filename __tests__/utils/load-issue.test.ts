import { beforeAll, expect, test } from 'vitest';
import type { Issue } from '@/types';
import { loadIssue } from '@/utils';

// Reads the fixture issue tree under __tests__/fixtures/content (CONTENT_ROOT is
// pointed there in vitest.config.mts), never the live content/ directory.
let issue: Issue;

beforeAll(async () => {
  issue = await loadIssue('2026-05-18');
});

test('loadIssue reads the issue date from index frontmatter', () => {
  expect(issue.date).toEqual(new Date('2026-05-18T00:00:00Z'));
});

test('loadIssue returns the body of index.md as intro', () => {
  expect(issue.intro).toMatch(/^Intro de l'édition fixture du 18 mai/);
});

test('loadIssue orders articles per the `articles` field in index.md', () => {
  expect(issue.articles.map((a) => a.slug)).toEqual([
    'fixture-alpha',
    'fixture-beta',
    'fixture-gamma'
  ]);
});

test('loadIssue maps article frontmatter into the Article shape', () => {
  const [first] = issue.articles;
  expect(first.title).toBe('Fixture Alpha : un titre de test pour le loader');
  expect(first.excerpt).toMatch(/^Excerpt de fixture alpha/);
  expect(first.summary).toMatch(/^Résumé de fixture alpha/);
  expect(first.readingTime).toBe(7);
  expect(first.category).toBe('frontend');
  expect(first.date).toEqual(new Date('2026-05-18T00:00:00Z'));
  expect(first.sources).toHaveLength(2);
  expect(first.sources[0]).toEqual({
    label: 'Source alpha un',
    url: 'example.com/alpha-1'
  });
  expect(first.content).toContain('Corps de fixture alpha');
});

test('loadIssue assigns the default image path /images/<date>/<slug>.jpg', () => {
  expect(issue.articles[0].image).toBe('/images/2026-05-18/fixture-alpha.jpg');
});
