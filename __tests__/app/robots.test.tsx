import robots from '@/app/robots';
import { SITE_URL } from '@/utils';
import { expect, test } from 'vitest';

test('robots allows crawling the whole site for every user agent', () => {
  const result = robots();
  expect(result.rules).toEqual({ userAgent: '*', allow: '/' });
});

test('robots points crawlers at the absolute sitemap URL', () => {
  const result = robots();
  expect(result.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
});
