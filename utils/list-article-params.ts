import { ArticleParams } from '@/types';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parseFrontmatter } from './parse-frontmatter';

const CONTENT_ROOT = path.join(process.cwd(), 'content');
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

type IndexFrontmatter = {
  date: Date;
  articles: string[];
};

export const listArticleParams = async (): Promise<ArticleParams[]> => {
  const issuesDir = path.join(CONTENT_ROOT, 'issues');
  const entries = await fs.readdir(issuesDir, { withFileTypes: true });
  const dates = entries
    .filter((entry) => entry.isDirectory() && ISO_DATE.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  const params: ArticleParams[] = [];
  for (const date of dates) {
    const raw = await fs.readFile(
      path.join(issuesDir, date, 'index.md'),
      'utf-8'
    );
    const { data } = parseFrontmatter<IndexFrontmatter>(raw);
    for (const slug of data.articles) {
      params.push({ date, slug });
    }
  }
  return params;
};
