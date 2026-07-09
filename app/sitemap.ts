import { listArticleParams } from '@/server';
import { SITE_URL } from '@/utils';
import type { MetadataRoute } from 'next';

const STATIC_PATHS = ['', '/archives', '/mentions-legales'] as const;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = await listArticleParams();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map(
    ({ date, slug }) => ({
      url: `${SITE_URL}/${date}/${slug}`,
      lastModified: new Date(date)
    })
  );

  return [...staticEntries, ...articleEntries];
};

export default sitemap;
