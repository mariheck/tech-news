import type { ArticleMeta } from '@/types';

const NUMBERS = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight'
];

const numbered = (i: number) => NUMBERS[i] ?? String(i + 1);

export const makeArticles = (count: number): ArticleMeta[] =>
  Array.from({ length: count }, (_, i) => ({
    slug: `a${i + 1}`,
    title: `Article ${numbered(i)}`,
    excerpt: `Excerpt ${numbered(i)}.`,
    image: `/a${i + 1}.jpg`,
    date: new Date('2026-05-18T00:00:00Z'),
    readingTime: 5 + i,
    category: 'autres'
  }));
