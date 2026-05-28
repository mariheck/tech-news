import fs from 'node:fs/promises';
import path from 'node:path';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

export const loadPage = async (slug: string): Promise<string> => {
  const raw = await fs.readFile(
    path.join(CONTENT_ROOT, 'pages', `${slug}.md`),
    'utf-8'
  );

  return raw.trim();
};
