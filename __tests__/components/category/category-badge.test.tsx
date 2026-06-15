import { CategoryBadge } from '@/components/category';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = {
  label: 'Design',
  accent: 'raspberry',
  href: '?cat=design',
  active: false
} as const;

test('CategoryBadge renders a link', () => {
  render(<CategoryBadge {...commonProps} />);
  expect(screen.getByRole('link', { name: 'Design' })).toBeInTheDocument();
});

test('Carries the accent CSS variable', () => {
  render(<CategoryBadge {...commonProps} />);
  const node = screen.getByRole('link', { name: 'Design' });
  expect(node.getAttribute('style')).toMatch(
    /--accent:\s*var\(--color-accent-raspberry\)/
  );
});

test('Has the tap-target pseudo-element', () => {
  render(<CategoryBadge {...commonProps} />);
  const node = screen.getByRole('link', { name: 'Design' });
  expect(node.className).toContain('before:absolute');
});

test('Inactive badge uses the transparent recipe and carries no aria-current', () => {
  render(<CategoryBadge {...commonProps} />);
  const node = screen.getByRole('link', { name: 'Design' });
  expect(node.className).toContain('bg-transparent');
  expect(node).not.toHaveAttribute('aria-current');
});

test('Active badge uses the filled accent recipe and marks the current page', () => {
  render(<CategoryBadge {...commonProps} active />);
  const node = screen.getByRole('link', { name: 'Design' });
  expect(node.className).toContain(
    'bg-[color-mix(in_oklab,var(--accent)_9%,transparent)]'
  );
  expect(node.className).toContain(
    'border-[color-mix(in_oklab,var(--accent)_18%,transparent)]'
  );
  expect(node).toHaveAttribute('aria-current', 'page');
});
