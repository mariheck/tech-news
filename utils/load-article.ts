import type { Article, CategorySlug, Source } from '@/types';
import fs from 'node:fs/promises';
import path from 'node:path';
import { CONTENT_ROOT } from './constants';
import { parseFrontmatter } from './parse-frontmatter';

type ArticleFrontmatter = {
  title: string;
  excerpt: string;
  summary: string;
  date: Date;
  reading_time: number;
  sources: Source[];
  category: CategorySlug;
};

export const loadArticle = async (
  date: string,
  slug: string
): Promise<Article> => {
  const raw = await fs.readFile(
    path.join(CONTENT_ROOT, 'issues', date, `${slug}.md`),
    'utf-8'
  );
  const { data, content } = parseFrontmatter<ArticleFrontmatter>(raw);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    summary: data.summary,
    image: `/images/${date}/${slug}.jpg`,
    date: data.date,
    readingTime: data.reading_time,
    sources: data.sources,
    category: data.category,
    content: content.trim()
  };
};
