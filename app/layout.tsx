import { Footer, Header } from '@/components/layout';
import { SITE_URL } from '@/utils';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'tech.news',
    template: '%s | tech.news'
  },
  description:
    "L'essentiel de la tech, chaque lundi. Développement frontend, design engineering, web design, IA.",
  // og/twitter description are intentionally omitted: Next inherits them from
  // `description` per route, so each page's social description always matches
  // its own meta description. Setting one here would shadow that inheritance.
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'tech.news',
    title: 'tech.news',
    url: '/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tech.news'
  }
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<Props>) => {
  return (
    <html lang='fr' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main className='mx-auto flex w-full max-w-7xl flex-1 px-6 py-12 md:px-12'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
