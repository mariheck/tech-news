import type { Source } from './source';

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: Date;
  readingTime: number;
  category: string;
};

export type Article = ArticleMeta & {
  summary: string;
  sources: Source[];
  content: string;
};
