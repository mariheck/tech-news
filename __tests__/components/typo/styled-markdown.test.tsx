import { StyledMarkdown } from '@/components/typo';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const markdown = `# Article title

## A second-level heading

### A third-level heading

A paragraph with \`inline code\` and a [link](https://example.com).

> A quote that should sit on the accent border.

- list item one
- list item two
`;

test('StyledMarkdown renders the leading H1 with the headline typography', () => {
  render(<StyledMarkdown markdown={markdown} />);
  const h1 = screen.getByRole('heading', { level: 1, name: 'Article title' });
  expect(h1.className).toContain('text-headline');
  expect(h1.className).toContain('text-primary');
});

test('StyledMarkdown renders H2 with the in-article H2 styles in text-primary', () => {
  render(<StyledMarkdown markdown={markdown} />);
  const h2 = screen.getByRole('heading', {
    level: 2,
    name: 'A second-level heading'
  });
  expect(h2.className).toContain('text-[1.875rem]');
  expect(h2.className).toContain('font-semibold');
  expect(h2.className).toContain('text-primary');
});

test('StyledMarkdown renders H3 in text-primary', () => {
  render(<StyledMarkdown markdown={markdown} />);
  const h3 = screen.getByRole('heading', {
    level: 3,
    name: 'A third-level heading'
  });
  expect(h3.className).toContain('text-title');
  expect(h3.className).toContain('text-primary');
});

test('StyledMarkdown renders inline code in a mono chip on bg-plum-overlay', () => {
  render(<StyledMarkdown markdown={markdown} />);
  const code = screen.getByText('inline code');
  expect(code.tagName).toBe('CODE');
  expect(code.className).toContain('font-mono');
  expect(code.className).toContain('bg-plum-overlay');
});

test('StyledMarkdown opens external links in a new tab with noopener noreferrer', () => {
  render(<StyledMarkdown markdown={markdown} />);
  const link = screen.getByRole('link', { name: 'link' });
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
});

test('StyledMarkdown renders blockquote with an --accent left border', () => {
  const { container } = render(<StyledMarkdown markdown={markdown} />);
  const quote = container.querySelector('blockquote');
  expect(quote).not.toBeNull();
  expect(quote?.className).toContain('border-l-2');
  expect(quote?.className).toContain('border-(--accent)');
});

test('StyledMarkdown renders unordered lists with disc bullets', () => {
  const { container } = render(<StyledMarkdown markdown={markdown} />);
  const ul = container.querySelector('ul');
  expect(ul).not.toBeNull();
  expect(ul?.className).toContain('list-disc');
});

test('StyledMarkdown caps paragraphs at 65ch (per the DESIGN.md rule)', () => {
  render(<StyledMarkdown markdown={markdown} />);
  const p = screen.getByText(/A paragraph with/);
  expect(p.tagName).toBe('P');
  expect(p.className).toContain('max-w-[65ch]');
});
