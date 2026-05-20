import type { Article } from '@/types';

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

export const makeArticles = (count: number): Article[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `a${i + 1}`,
    title: `Article ${numbered(i)}`,
    excerpt: `Excerpt ${numbered(i)}.`,
    images: [`/a${i + 1}.jpg`]
  }));
