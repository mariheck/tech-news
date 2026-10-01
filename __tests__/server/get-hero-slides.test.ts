import { getHeroSlides } from '@/server';
import { expect, test } from 'vitest';

// Backed by the fixture issue tree under __tests__/fixtures/content (CONTENT_ROOT
// is pointed there in vitest.config.mts): four editions, fewer than the five-week
// cap, so the hero shows one slide per available edition — the lead article (first
// slug in each index.md), most-recent-first.
test('getHeroSlides returns the lead article of each edition, newest-first', async () => {
  const slides = await getHeroSlides();

  expect(slides.map((article) => article.slug)).toEqual([
    'fixture-alpha',
    'fixture-delta',
    'fixture-zeta',
    'fixture-eta'
  ]);
});

test('getHeroSlides yields one slide per available week when fewer than five exist', async () => {
  expect(await getHeroSlides()).toHaveLength(4);
});

// With a category filter, each week contributes its highest-priority article of that
// category (first matching slug in index.md order). 2026-05-18 → fixture-beta (design),
// 2026-05-11 has no design article (omitted), 2026-05-04 → fixture-zeta (design),
// 2026-04-27 has no design article either (omitted).
test('getHeroSlides filters to the first article of the given category each week', async () => {
  const slides = await getHeroSlides('design');

  expect(slides.map((article) => article.slug)).toEqual([
    'fixture-beta',
    'fixture-zeta'
  ]);
});

test('getHeroSlides omits a week that has no article in the filtered category', async () => {
  expect(await getHeroSlides('design')).toHaveLength(2);
});
