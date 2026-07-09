import { expect, test } from 'vitest';
import { listArticleParams } from '@/server';

// Backed by the fixture issue tree under __tests__/fixtures/content (CONTENT_ROOT
// is pointed there in vitest.config.mts): one entry per article across editions.
test('listArticleParams returns one entry per article across every issue', async () => {
  expect(await listArticleParams()).toEqual([
    { date: '2026-05-18', slug: 'fixture-alpha' },
    { date: '2026-05-18', slug: 'fixture-beta' },
    { date: '2026-05-18', slug: 'fixture-gamma' },
    { date: '2026-05-11', slug: 'fixture-delta' },
    { date: '2026-05-11', slug: 'fixture-epsilon' },
    { date: '2026-05-04', slug: 'fixture-zeta' }
  ]);
});

test('listArticleParams returns the slugs in the order declared by index.md', async () => {
  const params = await listArticleParams();
  const week = params.filter((p) => p.date === '2026-05-18');
  expect(week.map((p) => p.slug)).toEqual([
    'fixture-alpha',
    'fixture-beta',
    'fixture-gamma'
  ]);
});
