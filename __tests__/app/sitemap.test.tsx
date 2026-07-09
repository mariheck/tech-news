import sitemap from '@/app/sitemap';
import { listArticleParams } from '@/server';
import { SITE_URL } from '@/utils';
import { expect, test } from 'vitest';

// Backed by the fixture issue tree (CONTENT_ROOT points there in
// vitest.config.mts): three editions totalling six articles, plus the three
// static routes (home, archives, mentions-legales).
test('sitemap lists the three static routes as absolute URLs', async () => {
  const entries = await sitemap();
  const urls = entries.map((entry) => entry.url);

  expect(urls).toContain(`${SITE_URL}`);
  expect(urls).toContain(`${SITE_URL}/archives`);
  expect(urls).toContain(`${SITE_URL}/mentions-legales`);
});

test('sitemap lists one entry per article from disk', async () => {
  const entries = await sitemap();
  const params = await listArticleParams();

  for (const { date, slug } of params) {
    expect(entries.map((entry) => entry.url)).toContain(
      `${SITE_URL}/${date}/${slug}`
    );
  }
});

test('sitemap holds exactly the static routes plus every article', async () => {
  const entries = await sitemap();
  const params = await listArticleParams();

  expect(entries).toHaveLength(3 + params.length);
});
