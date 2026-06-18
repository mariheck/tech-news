import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  name: 'tech.news',
  short_name: 'tech.news',
  description:
    "L'essentiel de la tech, chaque lundi. Développement frontend, design engineering, web design, IA.",
  start_url: '/',
  display: 'standalone',
  lang: 'fr',
  background_color: '#1a1620',
  theme_color: '#1a1620',
  icons: [
    { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    {
      src: '/icons/icon-192.png',
      type: 'image/png',
      sizes: '192x192',
      purpose: 'any'
    },
    {
      src: '/icons/icon-512.png',
      type: 'image/png',
      sizes: '512x512',
      purpose: 'any'
    },
    {
      src: '/icons/icon-maskable-512.png',
      type: 'image/png',
      sizes: '512x512',
      purpose: 'maskable'
    }
  ]
});

export default manifest;
