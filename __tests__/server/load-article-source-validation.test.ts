import { loadArticle } from '@/server';
import { expect, test, vi } from 'vitest';

// load-article reads via `import fs from 'node:fs/promises'`; mocking the
// default lets us hand it crafted frontmatter (with a dangerous source URL)
// without planting a `javascript:` link in the shared fixture tree.
vi.mock('node:fs/promises', () => ({
  default: { readFile: vi.fn() }
}));

const fs = (await import('node:fs/promises')).default;

const articleWith = (sourceUrl: string): string =>
  `---
title: 'T'
excerpt: 'E'
summary: 'S'
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'Bad', url: '${sourceUrl}' }
  ]
category: 'frontend'
---

# T

Body.
`;

test('loadArticle rejects an article carrying a javascript: source URL', async () => {
  vi.mocked(fs.readFile).mockResolvedValue(articleWith('javascript:alert(1)'));

  await expect(loadArticle('2026-05-18', 'malicious')).rejects.toThrow(
    /unsafe source URL/i
  );
});

test('loadArticle resolves when every source URL is safe', async () => {
  vi.mocked(fs.readFile).mockResolvedValue(
    articleWith('drafts.csswg.org/scroll-animations')
  );

  const article = await loadArticle('2026-05-18', 'safe');
  expect(article.sources[0].url).toBe('drafts.csswg.org/scroll-animations');
});
