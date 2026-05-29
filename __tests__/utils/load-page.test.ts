import { loadPage } from '@/utils';
import { beforeAll, expect, test } from 'vitest';

// Reads the fixture page under __tests__/fixtures/content/pages (CONTENT_ROOT is
// pointed there in vitest.config.mts), never the live content/ directory.
let content: string;

beforeAll(async () => {
  content = await loadPage('mentions-legales');
});

test('loadPage returns the markdown body starting with the page H1', () => {
  expect(content).toMatch(/^# Mentions légales/);
});

test('loadPage reads the full file, including later sections', () => {
  expect(content).toContain('## Hébergeur du site');
});

test('loadPage rejects a slug with a path-traversal segment', async () => {
  await expect(loadPage('../../../etc/passwd')).rejects.toThrow(/invalid slug/i);
});
