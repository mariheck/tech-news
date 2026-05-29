import fs from 'node:fs/promises';
import path from 'node:path';
import { CONTENT_ROOT } from './constants';

export const loadPage = async (slug: string): Promise<string> => {
  const raw = await fs.readFile(
    path.join(CONTENT_ROOT, 'pages', `${slug}.md`),
    'utf-8'
  );

  return raw.trim();
};
