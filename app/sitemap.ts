import { getArchiveIssueDates, listArticleParams } from '@/server';
import { SITE_URL, getMonthHref, listArchiveMonths } from '@/utils';
import type { MetadataRoute } from 'next';

const STATIC_PATHS = ['', '/mentions-legales'] as const;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = await listArticleParams();
  const months = listArchiveMonths(await getArchiveIssueDates());

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map(
    ({ date, slug }) => ({
      url: `${SITE_URL}/${date}/${slug}`,
      lastModified: new Date(date)
    })
  );

  const monthEntries: MetadataRoute.Sitemap = months.map((month) => ({
    url: `${SITE_URL}${getMonthHref({ month })}`
  }));

  return [...staticEntries, ...monthEntries, ...articleEntries];
};

export default sitemap;
