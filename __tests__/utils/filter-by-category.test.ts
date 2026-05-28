import type { ArticleMeta, CategorySlug } from '@/types';
import { filterByCategory } from '@/utils';
import { expect, test } from 'vitest';

const make = (category: CategorySlug, suffix: string): ArticleMeta => ({
  slug: `a-${suffix}`,
  title: `Article ${suffix}`,
  excerpt: `Excerpt ${suffix}.`,
  summary: `Summary ${suffix}.`,
  image: `/${suffix}.jpg`,
  date: new Date('2026-05-18T00:00:00Z'),
  readingTime: 5,
  category
});

const ARTICLES: ArticleMeta[] = [
  make('frontend', '1'),
  make('design', '2'),
  make('frontend', '3'),
  make('autres', '4'),
  make('dev-ia', '5'),
  make('actus-ia', '6')
];

test('filterByCategory returns input unchanged when slug is undefined', () => {
  expect(filterByCategory(ARTICLES, undefined)).toBe(ARTICLES);
});

test('filterByCategory returns articles whose category matches the slug', () => {
  const result = filterByCategory(ARTICLES, 'frontend');
  expect(result.map((a) => a.slug)).toEqual(['a-1', 'a-3']);
});

test('filterByCategory preserves source order for matches', () => {
  const result = filterByCategory(ARTICLES, 'frontend');
  expect(result).toEqual([ARTICLES[0], ARTICLES[2]]);
});

test('filterByCategory matches multi-word slugs (dev-ia, actus-ia)', () => {
  expect(filterByCategory(ARTICLES, 'dev-ia')).toEqual([ARTICLES[4]]);
  expect(filterByCategory(ARTICLES, 'actus-ia')).toEqual([ARTICLES[5]]);
});

test('filterByCategory returns an empty array when no article matches', () => {
  const onlyAutres = [make('autres', '7')];
  expect(filterByCategory(onlyAutres, 'frontend')).toEqual([]);
});
