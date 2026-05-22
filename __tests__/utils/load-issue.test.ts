import { beforeAll, expect, test } from 'vitest';
import type { Issue } from '@/types';
import { loadIssue } from '@/utils';

let issue: Issue;

beforeAll(async () => {
  issue = await loadIssue('2026-05-18');
});

test('loadIssue reads the issue date from index frontmatter', () => {
  expect(issue.date).toEqual(new Date('2026-05-18T00:00:00Z'));
});

test('loadIssue returns the body of index.md as intro', () => {
  expect(issue.intro).toMatch(/^Semaine dense/);
});

test('loadIssue orders articles per the `articles` field in index.md', () => {
  expect(issue.articles.map((a) => a.slug)).toEqual([
    'next-js-16',
    'animations-css-scroll-driven',
    'tendances-web-design-2026',
    'sortie-de-claude-sonnet-4-6'
  ]);
});

test('loadIssue maps article frontmatter into the Article shape', () => {
  const [first] = issue.articles;
  expect(first.title).toBe(
    'Next.js 16, tour de la release : breaking changes et impact migration'
  );
  expect(first.excerpt).toMatch(/^Turbopack stable/);
  expect(first.summary).toMatch(/^Vercel publie Next.js 16/);
  expect(first.readingTime).toBe(8);
  expect(first.category).toBe('Autres');
  expect(first.date).toEqual(new Date('2026-05-18T00:00:00Z'));
  expect(first.sources).toHaveLength(3);
  expect(first.sources[0]).toEqual({
    label: 'Next.js 16 release notes',
    url: 'nextjs.org/blog/next-16'
  });
  expect(first.content).toContain('Vercel a publié Next.js 16');
});

test('loadIssue assigns the default image path /images/<date>/<slug>.jpg', () => {
  expect(issue.articles[0].image).toBe('/images/2026-05-18/next-js-16.jpg');
});
