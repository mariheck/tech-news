import { Header } from '@/components/layout';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Header is a banner landmark', () => {
  render(<Header />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});

test('Header has a link to the archives page', () => {
  render(<Header />);
  const link = screen.getByRole('link', { name: 'Archives' });
  expect(link).toHaveAttribute('href', '/archives');
});

test('Header archives link extends its hit area via a before pseudo-element', () => {
  render(<Header />);
  const link = screen.getByRole('link', { name: 'Archives' });
  expect(link.className).toContain('relative');
  expect(link.className).toContain('before:absolute');
  expect(link.className).toContain("before:content-['']");
  expect(link.className).toContain('before:-inset-1');
});
