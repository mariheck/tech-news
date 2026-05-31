import { Header } from '@/components/layout';
import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Header is a banner landmark', () => {
  render(<Header />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});

// jsdom does not evaluate the `hidden` / `md:hidden` Tailwind classes, so both
// the desktop and the mobile nav render at once. Each route therefore appears
// twice; queries must be scoped to one nav to stay unambiguous.
test('primary (desktop) nav links to home and archives', () => {
  render(<Header />);
  const nav = screen.getByRole('navigation', { name: 'Navigation principale' });
  expect(within(nav).getByRole('link', { name: 'Accueil' })).toHaveAttribute(
    'href',
    '/'
  );
  expect(within(nav).getByRole('link', { name: 'Archives' })).toHaveAttribute(
    'href',
    '/archives'
  );
});

// The mobile nav is icon-only: the visible label is an aria-hidden icon, so the
// accessible name must come from an explicit aria-label, not the title alone.
test('mobile nav exposes icon-only links named via aria-label', () => {
  render(<Header />);
  const nav = screen.getByRole('navigation', { name: 'Navigation mobile' });

  const home = within(nav).getByRole('link', { name: 'Accueil' });
  expect(home).toHaveAttribute('href', '/');
  expect(home).toHaveAttribute('aria-label', 'Accueil');

  const archives = within(nav).getByRole('link', { name: 'Archives' });
  expect(archives).toHaveAttribute('href', '/archives');
  expect(archives).toHaveAttribute('aria-label', 'Archives');
});
