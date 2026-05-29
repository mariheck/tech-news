import { CategoryFilter } from '@/components/ui';
import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

test('CategoryFilter renders a nav landmark labelled "Filtrer par catégorie"', () => {
  render(<CategoryFilter basePath='/' />);
  expect(
    screen.getByRole('navigation', { name: 'Filtrer par catégorie' })
  ).toBeInTheDocument();
});

test('CategoryFilter renders 5 links in canonical order with "Tous" first', () => {
  render(<CategoryFilter basePath='/' />);
  const nav = screen.getByRole('navigation', { name: 'Filtrer par catégorie' });
  const links = within(nav).getAllByRole('link');
  expect(links.map((l) => l.textContent)).toEqual([
    'Tous',
    'Frontend',
    'Design',
    'Dev IA',
    'Actus IA'
  ]);
});

test('When no active prop is passed, "Tous" carries aria-current="page"', () => {
  render(<CategoryFilter basePath='/' />);
  const tous = screen.getByRole('link', { name: 'Tous' });
  expect(tous).toHaveAttribute('aria-current', 'page');
});

test('When no active prop is passed, no other link carries aria-current', () => {
  render(<CategoryFilter basePath='/' />);
  for (const name of ['Frontend', 'Design', 'Dev IA', 'Actus IA']) {
    expect(screen.getByRole('link', { name })).not.toHaveAttribute(
      'aria-current'
    );
  }
});

test('When active="design", only "Design" carries aria-current="page"', () => {
  render(<CategoryFilter basePath='/' active='design' />);
  expect(screen.getByRole('link', { name: 'Design' })).toHaveAttribute(
    'aria-current',
    'page'
  );
  expect(screen.getByRole('link', { name: 'Tous' })).not.toHaveAttribute(
    'aria-current'
  );
});

test('"Tous" link points to basePath', () => {
  render(<CategoryFilter basePath='/' />);
  expect(screen.getByRole('link', { name: 'Tous' })).toHaveAttribute(
    'href',
    '/'
  );
});

test('"Tous" link respects a non-root basePath', () => {
  render(<CategoryFilter basePath='/archives' />);
  expect(screen.getByRole('link', { name: 'Tous' })).toHaveAttribute(
    'href',
    '/archives'
  );
});

test('Each category link uses a relative ?cat=<slug> href', () => {
  render(<CategoryFilter basePath='/' />);
  expect(screen.getByRole('link', { name: 'Frontend' })).toHaveAttribute(
    'href',
    '?cat=frontend'
  );
  expect(screen.getByRole('link', { name: 'Dev IA' })).toHaveAttribute(
    'href',
    '?cat=dev-ia'
  );
  expect(screen.getByRole('link', { name: 'Actus IA' })).toHaveAttribute(
    'href',
    '?cat=actus-ia'
  );
});

test('visible prop restricts the rendered categories, keeping CATEGORIES order', () => {
  render(<CategoryFilter basePath='/' visible={['actus-ia', 'frontend']} />);
  const nav = screen.getByRole('navigation', { name: 'Filtrer par catégorie' });
  const labels = within(nav)
    .getAllByRole('link')
    .map((l) => l.textContent);
  expect(labels).toEqual(['Tous', 'Frontend', 'Actus IA']);
});

test('visible={[]} still renders "Tous" on its own', () => {
  render(<CategoryFilter basePath='/' visible={[]} />);
  const nav = screen.getByRole('navigation', { name: 'Filtrer par catégorie' });
  const labels = within(nav)
    .getAllByRole('link')
    .map((l) => l.textContent);
  expect(labels).toEqual(['Tous']);
});

test('Active badge carries the active background recipe using its accent', () => {
  render(<CategoryFilter basePath='/' active='design' />);
  const link = screen.getByRole('link', { name: 'Design' });
  expect(link.className).toContain(
    'bg-[color-mix(in_oklab,var(--accent)_9%,transparent)]'
  );
  // React 19 renders CSS variable style entries verbatim ("--accent:var(...)"),
  // but jsdom may insert a space after the colon. Match either form.
  expect(link.getAttribute('style')).toMatch(
    /--accent:\s*var\(--color-accent-raspberry\)/
  );
});

test('Idle badge carries the subtle border + secondary text recipe', () => {
  render(<CategoryFilter basePath='/' />);
  const link = screen.getByRole('link', { name: 'Frontend' });
  expect(link.className).toContain('border-plum-subtle');
  expect(link.className).toContain('text-secondary');
});

test('Every badge has a touch-target pseudo extending the vertical hit zone', () => {
  render(<CategoryFilter basePath='/' />);
  const link = screen.getByRole('link', { name: 'Tous' });
  expect(link.className).toContain('relative');
  expect(link.className).toContain('before:absolute');
  expect(link.className).toContain('before:-inset-y-2');
});
