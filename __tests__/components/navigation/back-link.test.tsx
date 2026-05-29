import { BackLink } from '@/components/navigation';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('BackLink renders the "Retour" label', () => {
  render(<BackLink href='/' />);
  expect(screen.getByText(/Retour/)).toBeInTheDocument();
});

test('BackLink renders an anchor with the provided href', () => {
  render(<BackLink href='/archives' />);
  const link = screen.getByRole('link', { name: /Retour/ });
  expect(link).toHaveAttribute('href', '/archives');
});

test('BackLink uses mono styling at text-secondary scale', () => {
  render(<BackLink href='/' />);
  const link = screen.getByRole('link', { name: /Retour/ });
  expect(link.className).toContain('font-mono');
  expect(link.className).toMatch(/text-secondary/);
});

test('BackLink lifts to text-primary on hover and focus-visible', () => {
  render(<BackLink href='/' />);
  const link = screen.getByRole('link', { name: /Retour/ });
  expect(link.className).toContain('hover:text-primary');
  expect(link.className).toContain('focus-visible:text-primary');
});

test('BackLink animates the colour transition', () => {
  render(<BackLink href='/' />);
  const link = screen.getByRole('link', { name: /Retour/ });
  expect(link.className).toContain('transition-colors');
  expect(link.className).toContain('duration-200');
});

test('BackLink marks its icon as aria-hidden so the accessible name stays "Retour"', () => {
  const { container } = render(<BackLink href='/' />);
  const svg = container.querySelector('svg');
  expect(svg).not.toBeNull();
  expect(svg).toHaveAttribute('aria-hidden', 'true');
});
