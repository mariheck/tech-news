import { expect, test } from 'vitest';
import { listArticleParams } from '@/utils';

test('listArticleParams returns one entry per article across every issue', async () => {
  const params = await listArticleParams();
  expect(params).toContainEqual({ date: '2026-05-18', slug: 'next-js-16' });
  expect(params).toContainEqual({
    date: '2026-05-18',
    slug: 'animations-css-scroll-driven'
  });
  expect(params).toContainEqual({
    date: '2026-05-18',
    slug: 'tendances-web-design-2026'
  });
  expect(params).toContainEqual({
    date: '2026-05-18',
    slug: 'sortie-de-claude-sonnet-4-6'
  });
});

test('listArticleParams returns the slugs in the order declared by index.md', async () => {
  const params = await listArticleParams();
  const week = params.filter((p) => p.date === '2026-05-18');
  expect(week.map((p) => p.slug)).toEqual([
    'next-js-16',
    'animations-css-scroll-driven',
    'tendances-web-design-2026',
    'sortie-de-claude-sonnet-4-6'
  ]);
});
