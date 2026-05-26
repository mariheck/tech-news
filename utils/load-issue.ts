import fs from 'node:fs/promises';
import path from 'node:path';
import type { Article, CategorySlug, Issue, Source } from '@/types';
import { parseFrontmatter } from './parse-frontmatter';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

type IndexFrontmatter = {
  date: Date;
  articles: string[];
};

type ArticleFrontmatter = {
  title: string;
  excerpt: string;
  summary: string;
  date: Date;
  reading_time: number;
  sources: Source[];
  category: CategorySlug;
};

export const loadIssue = async (date: string): Promise<Issue> => {
  const indexRaw = await fs.readFile(
    path.join(CONTENT_ROOT, 'issues', date, 'index.md'),
    'utf-8'
  );
  const { data: index, content: intro } =
    parseFrontmatter<IndexFrontmatter>(indexRaw);

  const articles = await Promise.all(
    index.articles.map((slug) => loadArticle(slug, date))
  );

  return {
    date: index.date,
    intro: intro.trim(),
    articles
  };
};

const loadArticle = async (slug: string, date: string): Promise<Article> => {
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
