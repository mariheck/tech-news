import sitemap from '@/app/sitemap';
import { getArchiveIssueDates, listArticleParams } from '@/server';
import { SITE_URL, listArchiveMonths } from '@/utils';
import { expect, test } from 'vitest';

// Backed by the fixture issue tree (CONTENT_ROOT points there in
// vitest.config.mts): four editions across two archive months, plus the two
// static routes (home, mentions-legales).
test('sitemap lists the two static routes as absolute URLs', async () => {
  const entries = await sitemap();
  const urls = entries.map((entry) => entry.url);

  expect(urls).toContain(`${SITE_URL}`);
  expect(urls).toContain(`${SITE_URL}/mentions-legales`);
});

// /archives only redirects to the most recent month, and a redirect has no
// place in a sitemap.
test('sitemap leaves out the redirecting /archives route', async () => {
  const entries = await sitemap();
  const urls = entries.map((entry) => entry.url);

  expect(urls).not.toContain(`${SITE_URL}/archives`);
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

test('sitemap lists an entry for every archive month', async () => {
  const entries = await sitemap();
  const urls = entries.map((entry) => entry.url);

  expect(urls).toContain(`${SITE_URL}/archives/2026-04`);
  expect(urls).toContain(`${SITE_URL}/archives/2026-05`);
});

test('sitemap holds exactly the static routes, the months and every article', async () => {
  const entries = await sitemap();
  const params = await listArticleParams();
  const months = listArchiveMonths(await getArchiveIssueDates());

  expect(entries).toHaveLength(2 + months.length + params.length);
});
