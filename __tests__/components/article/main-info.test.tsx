import { MainInfo } from '@/components/article';
import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = {
  summary: 'Vercel publie Next.js 16 avec Turbopack stable.',
  date: new Date('2026-05-18T00:00:00Z'),
  readingTime: 8,
  sources: [
    { label: 'Next.js 16 release notes', url: 'nextjs.org/blog/next-16' }
  ]
};

test('MainInfo renders as an <aside> labelled "Métadonnées de l\'article"', () => {
  render(<MainInfo {...commonProps} />);
  expect(
    screen.getByRole('complementary', { name: "Métadonnées de l'article" })
  ).toBeInTheDocument();
});

test('MainInfo renders the summary paragraph at body+ size', () => {
  render(<MainInfo {...commonProps} />);
  const summary = screen.getByText(/Vercel publie Next\.js 16/);
  expect(summary.tagName).toBe('P');
  expect(summary.className).toContain('text-[1.0625rem]');
});

test('MainInfo renders the MetaData rows (Publié / Lecture)', () => {
  render(<MainInfo {...commonProps} />);
  expect(screen.getByText('Publié')).toBeInTheDocument();
  expect(screen.getByText('Lecture')).toBeInTheDocument();
  expect(screen.getByText('18 mai 2026')).toBeInTheDocument();
  expect(screen.getByText('8 minutes')).toBeInTheDocument();
});

test('MainInfo renders the desktop Sources inside the sidebar (hidden md:flex)', () => {
  const { container } = render(<MainInfo {...commonProps} />);
  const aside = container.querySelector('aside')!;
  const sourcesRoot = within(aside).getByText(/Sources/i).parentElement;
  expect(sourcesRoot?.className).toContain('hidden');
  expect(sourcesRoot?.className).toContain('md:flex');
});

test('MainInfo renders the decorative halo (hidden on mobile, visible from md)', () => {
  const { container } = render(<MainInfo {...commonProps} />);
  const halo = container.querySelector('[data-testid="maininfo-halo"]');
  expect(halo).not.toBeNull();
  expect(halo?.className).toContain('hidden');
  expect(halo?.className).toContain('md:block');
});

test('MainInfo forwards layout classes via the className prop', () => {
  const { container } = render(
    <MainInfo {...commonProps} className='md:sticky md:top-28' />
  );
  const aside = container.querySelector('aside');
  expect(aside?.className).toContain('md:sticky');
  expect(aside?.className).toContain('md:top-28');
});
