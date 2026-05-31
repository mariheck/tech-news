import { Sources } from '@/components/article';
import type { Source } from '@/types';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const sources: Source[] = [
  { label: 'Next.js 16 release notes', url: 'nextjs.org/blog/next-16' },
  { label: 'RFC: cache directives', url: 'github.com/vercel/next.js' },
  { label: 'Migration codemods', url: 'github.com/vercel/next-codemod' }
];

test('Sources renders the "Sources" eyebrow label', () => {
  render(<Sources sources={sources} />);
  const label = screen.getByText(/Sources/);
  expect(label.className).toContain('text-label');
  expect(label.className).toContain('text-tertiary');
});

test('Sources renders one list item per source', () => {
  const { container } = render(<Sources sources={sources} />);
  expect(container.querySelectorAll('ol > li')).toHaveLength(3);
});

test('Sources renders the [n] markers in mono using --accent-light color', () => {
  render(<Sources sources={sources} />);
  const marker = screen.getByText('[1]');
  expect(marker.className).toContain('font-mono');
  expect(marker.className).toContain('text-(--accent-light)');
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

test('Sources drives the label hover/focus state from the anchor group', () => {
  render(<Sources sources={sources} />);
  const link = screen.getByRole('link', { name: 'Next.js 16 release notes' });
  expect(link.className).toContain('group');
  const label = screen.getByText('Next.js 16 release notes');
  expect(label.className).toContain('group-hover:text-(--accent-light)');
  expect(label.className).toContain('group-focus-visible:text-(--accent-light)');
});

test('Sources hides the decorative marker and URL from the accessible name', () => {
  render(<Sources sources={sources} />);
  expect(screen.getByText('[1]')).toHaveAttribute('aria-hidden', 'true');
  expect(screen.getByText('nextjs.org/blog/next-16')).toHaveAttribute(
    'aria-hidden',
    'true'
  );
});

test('Sources exposes the full label via a title attribute despite the clamp', () => {
  render(<Sources sources={sources} />);
  const link = screen.getByRole('link', { name: 'Next.js 16 release notes' });
  expect(link).toHaveAttribute('title', 'Next.js 16 release notes');
});

test('Sources caps each item and breaks long URLs so they cannot overflow', () => {
  const { container } = render(
    <Sources
      sources={[
        {
          label:
            'A very long source label that could overrun the sidebar width',
          url: 'example.com/a/very/long/unbroken/path/segmentthatcannotwrapnaturally'
        }
      ]}
    />
  );
  const item = container.querySelector('ol > li');
  expect(item?.className).toContain('max-w-full');
  const url = screen.getByText(/segmentthatcannotwrapnaturally/);
  expect(url.className).toContain('break-all');
});

test('Sources renders nothing when there are no sources', () => {
  const { container } = render(<Sources sources={[]} />);
  expect(container).toBeEmptyDOMElement();
});

test('Sources forwards extra classes via the className prop', () => {
  const { container } = render(
    <Sources sources={sources} className='hidden md:flex' />
  );
  const root = container.firstElementChild;
  expect(root?.className).toContain('hidden');
  expect(root?.className).toContain('md:flex');
});
