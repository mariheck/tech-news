import { Footer, Header } from '@/components/layout';
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
  title: 'tech.news',
  description:
    'Récap hebdomadaire des dernières actus de la tech. Développement frontend, design engineering, web design, IA.'
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<Props>) => {
  return (
    <html lang='fr' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main className='mx-auto w-full max-w-7xl flex-1 px-12 py-12 flex'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
