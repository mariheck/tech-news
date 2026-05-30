import { SITE_URL } from '@/utils';
import { expect, test, vi } from 'vitest';

// next/font/google is a build-time transform; jsdom can't evaluate the real
// loader, so stub it before importing the layout module.
vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' })
}));

const { metadata } = await import('@/app/layout');

test('root metadata sets metadataBase so relative OG assets resolve absolutely', () => {
  expect(metadata.metadataBase).toEqual(new URL(SITE_URL));
});

test('root metadata exposes a title template suffixing child titles with the brand', () => {
  expect(metadata.title).toEqual({
    default: 'tech.news',
    template: '%s | tech.news'
  });
});

test('root metadata provides French OpenGraph defaults', () => {
  expect(metadata.openGraph).toMatchObject({
    type: 'website',
    locale: 'fr_FR',
    siteName: 'tech.news'
  });
});

test('root metadata provides a summary_large_image Twitter card', () => {
  expect(metadata.twitter).toMatchObject({ card: 'summary_large_image' });
});

test('root OpenGraph omits its own description so each page inherits its own', () => {
  expect(metadata.openGraph).not.toHaveProperty('description');
});

test('root Twitter omits its own description so each page inherits its own', () => {
  expect(metadata.twitter).not.toHaveProperty('description');
});
