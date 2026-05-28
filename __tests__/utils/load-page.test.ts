import { loadPage } from '@/utils';
import { beforeAll, expect, test } from 'vitest';

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
