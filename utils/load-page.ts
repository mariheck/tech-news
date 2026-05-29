import fs from 'node:fs/promises';
import path from 'node:path';
import { CONTENT_ROOT } from './constants';
import { isSafeSlug } from './is-safe-slug';

export const loadPage = async (slug: string): Promise<string> => {
  if (!isSafeSlug(slug)) {
    throw new Error(`loadPage: invalid slug: ${slug}`);
  }

  const raw = await fs.readFile(
    path.join(CONTENT_ROOT, 'pages', `${slug}.md`),
    'utf-8'
  );

  return raw.trim();
};
