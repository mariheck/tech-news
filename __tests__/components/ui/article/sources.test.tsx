import { Sources } from '@/components/ui/article';
import type { Source } from '@/types';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const sources: Source[] = [
  { label: 'Next.js 16 release notes', url: 'nextjs.org/blog/next-16' },
  { label: 'RFC: cache directives', url: 'github.com/vercel/next.js' },
  { label: 'Migration codemods', url: 'github.com/vercel/next-codemod' }
];

test('Sources renders the "— Sources" eyebrow label', () => {
  render(<Sources sources={sources} />);
  const label = screen.getByText(/Sources/);
  expect(label.className).toContain('text-label');
  expect(label.className).toContain('text-tertiary');
});

test('Sources renders one list item per source', () => {
  const { container } = render(<Sources sources={sources} />);
  expect(container.querySelectorAll('ol > li')).toHaveLength(3);
});

test('Sources renders the [n] markers in mono using --accent color', () => {
  render(<Sources sources={sources} />);
  const marker = screen.getByText('[1]');
  expect(marker.className).toContain('font-mono');
  expect(marker.className).toContain('text-(--accent)');
});

test('Sources renders each source label inside an external anchor', () => {
  render(<Sources sources={sources} />);
  const link = screen.getByRole('link', { name: 'Next.js 16 release notes' });
  expect(link).toHaveAttribute('href', 'nextjs.org/blog/next-16');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
});

test('Sources renders each URL as a tertiary mono line under the anchor', () => {
  render(<Sources sources={sources} />);
  const url = screen.getByText('nextjs.org/blog/next-16');
  expect(url.tagName).toBe('SPAN');
  expect(url.className).toContain('font-mono');
  expect(url.className).toContain('text-tertiary');
});

test('Sources forwards extra classes via the className prop', () => {
  const { container } = render(
    <Sources sources={sources} className='hidden md:flex' />
  );
  const root = container.firstElementChild;
  expect(root?.className).toContain('hidden');
  expect(root?.className).toContain('md:flex');
});
