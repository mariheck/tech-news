import { Brand } from '@/components/layout';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Brand renders a link to / with the tech.news wordmark', () => {
  render(<Brand />);
  const link = screen.getByRole('link', { name: /tech\.news/i });
  expect(link).toHaveAttribute('href', '/');
});

test('Brand reveals a decorative halo behind the wordmark on hover or focus', () => {
  render(<Brand />);
  const link = screen.getByRole('link', { name: /tech\.news/i });

  expect(link.className).toContain('group');

  const decorativeChildren = Array.from(
    link.querySelectorAll('[aria-hidden="true"]')
  );
  const halo = decorativeChildren.find(
    (elt) =>
      elt.className.includes('group-hover:opacity-') &&
      elt.className.includes('group-focus-visible:opacity-')
  );
  expect(halo).toBeDefined();
});

test('Brand defaults to the medium wordmark size (text-sm)', () => {
  render(<Brand />);
  const link = screen.getByRole('link', { name: /tech\.news/i });
  expect(link.className).toContain('text-sm');
});

test('Brand renders the small wordmark at 0.8125rem without resizing the accent dot', () => {
  render(<Brand size='sm' />);
  const link = screen.getByRole('link', { name: /tech\.news/i });
  expect(link.className).toContain('text-[0.8125rem]');
  expect(link.className).not.toContain('text-sm');

  const dot = link.querySelector('[aria-hidden="true"].size-2');
  expect(dot).not.toBeNull();
});
