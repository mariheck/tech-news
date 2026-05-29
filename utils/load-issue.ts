import type { Issue } from '@/types';
import fs from 'node:fs/promises';
import path from 'node:path';
import { CONTENT_ROOT, ISO_DATE } from './constants';
import { loadArticle } from './load-article';
import { parseFrontmatter } from './parse-frontmatter';

type IndexFrontmatter = {
  date: Date;
  articles: string[];
};

export const loadIssue = async (date: string): Promise<Issue> => {
  if (!ISO_DATE.test(date)) {
    throw new Error(`loadIssue: invalid date: ${date}`);
  }

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
