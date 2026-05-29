import { ArticleParams } from '@/types';
import fs from 'node:fs/promises';
import path from 'node:path';
import { CONTENT_ROOT } from './constants';
import { listIssueDates } from './list-issue-dates';
import { parseFrontmatter } from './parse-frontmatter';

type IndexFrontmatter = {
  date: Date;
  articles: string[];
};

export const listArticleParams = async (): Promise<ArticleParams[]> => {
  const dates = await listIssueDates();

  const params: ArticleParams[] = [];
  for (const date of dates) {
    const raw = await fs.readFile(
      path.join(CONTENT_ROOT, 'issues', date, 'index.md'),
      'utf-8'
    );
    const { data } = parseFrontmatter<IndexFrontmatter>(raw);
    for (const slug of data.articles) {
      params.push({ date, slug });
    }
  }
  return params;
};
