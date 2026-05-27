import type { Issue } from '@/types';
import fs from 'node:fs/promises';
import path from 'node:path';
import { loadArticle } from './load-article';
import { parseFrontmatter } from './parse-frontmatter';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

type IndexFrontmatter = {
  date: Date;
  articles: string[];
};

export const loadIssue = async (date: string): Promise<Issue> => {
  const indexRaw = await fs.readFile(
    path.join(CONTENT_ROOT, 'issues', date, 'index.md'),
    'utf-8'
  );
  const { data: index, content: intro } =
    parseFrontmatter<IndexFrontmatter>(indexRaw);

  const articles = await Promise.all(
    index.articles.map((slug) => loadArticle(date, slug))
  );

  return {
    date: index.date,
    intro: intro.trim(),
    articles
  };
};
