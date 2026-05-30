import { SITE_URL } from '@/utils';
import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: '*', allow: '/' },
  sitemap: `${SITE_URL}/sitemap.xml`
});

export default robots;
