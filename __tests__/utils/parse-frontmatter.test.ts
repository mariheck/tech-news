import { expect, test } from 'vitest';
import { parseFrontmatter } from '@/utils';

test('parseFrontmatter separates frontmatter data from body content', () => {
  const raw = "---\ntitle: 'Hello'\n---\n\nBody text\n";
  const { data, content } = parseFrontmatter(raw);
  expect(data).toEqual({ title: 'Hello' });
  expect(content).toBe('\nBody text\n');
});

test('parseFrontmatter keeps colons inside single-quoted strings', () => {
  const raw = "---\ntitle: 'Hello: World'\n---\n";
  expect(parseFrontmatter(raw).data).toEqual({ title: 'Hello: World' });
});

test('parseFrontmatter parses ISO date values into Date objects', () => {
  const raw = '---\ndate: 2026-05-18T00:00:00Z\n---\n';
  expect(parseFrontmatter(raw).data.date).toEqual(
    new Date('2026-05-18T00:00:00Z')
  );
});

test('parseFrontmatter parses integer scalars as numbers', () => {
  const raw = '---\nreading_time: 8\n---\n';
  expect(parseFrontmatter(raw).data.reading_time).toBe(8);
});

test('parseFrontmatter parses block sequences of bare strings', () => {
  const raw = '---\narticles:\n  - next-js-16\n  - sonnet-4-6\n---\n';
  expect(parseFrontmatter(raw).data.articles).toEqual([
    'next-js-16',
    'sonnet-4-6'
  ]);
});

test('parseFrontmatter parses flow-style sequence of inline mappings', () => {
  const raw = `---
sources:
  [
    { label: 'A', url: 'a.com' },
    { label: 'B: long', url: 'b.com' }
  ]
---
`;
  expect(parseFrontmatter(raw).data.sources).toEqual([
    { label: 'A', url: 'a.com' },
    { label: 'B: long', url: 'b.com' }
  ]);
});

test('parseFrontmatter throws when frontmatter delimiters are missing', () => {
  expect(() => parseFrontmatter('no delimiters here')).toThrow();
});
