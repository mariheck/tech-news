import fs from 'node:fs/promises';
import path from 'node:path';
import { CONTENT_ROOT, ISO_DATE } from './constants';

export const listIssueDates = async (): Promise<string[]> => {
  const issuesDir = path.join(CONTENT_ROOT, 'issues');
  const entries = await fs.readdir(issuesDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory() && ISO_DATE.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => b.localeCompare(a));
};
