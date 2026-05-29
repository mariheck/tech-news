import { CategoryBadge } from '@/components/category';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = { label: 'Design', accent: 'raspberry' } as const;

test('CategoryBadge renders a <span> (not a link) when no href is provided', () => {
  render(<CategoryBadge {...commonProps} />);
  expect(screen.queryByRole('link')).not.toBeInTheDocument();
  const node = screen.getByText('Design');
  expect(node.tagName).toBe('SPAN');
});

test('Span variant carries the accent CSS variable', () => {
  render(<CategoryBadge {...commonProps} />);
  const node = screen.getByText('Design');
  expect(node.getAttribute('style')).toMatch(
    /--accent:\s*var\(--color-accent-raspberry\)/
  );
});

test('Span variant uses the filled accent recipe', () => {
  render(<CategoryBadge {...commonProps} />);
  const node = screen.getByText('Design');
  expect(node.className).toContain(
    'bg-[color-mix(in_oklab,var(--accent)_9%,transparent)]'
  );
  expect(node.className).toContain(
    'border-[color-mix(in_oklab,var(--accent)_18%,transparent)]'
  );
});

test('Span variant has no tap-target pseudo (non-interactive)', () => {
  render(<CategoryBadge {...commonProps} />);
  const node = screen.getByText('Design');
  expect(node.className).not.toContain('before:absolute');
});

test('Span variant carries no aria-current attribute', () => {
  render(<CategoryBadge {...commonProps} />);
  const node = screen.getByText('Design');
  expect(node).not.toHaveAttribute('aria-current');
});

test('Link variant still renders as a link when href is provided', () => {
  render(<CategoryBadge {...commonProps} href='?cat=design' active={false} />);
  expect(screen.getByRole('link', { name: 'Design' })).toBeInTheDocument();
});
