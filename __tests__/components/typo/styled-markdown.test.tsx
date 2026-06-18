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
  expect(code.className).toContain('inline-block');
  expect(code.className).toContain('font-mono');
  expect(code.className).toContain('bg-plum-overlay');
  expect(code.className).toContain('[font-variant-ligatures:none]');
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

const tableMarkdown = `| Navigateur | Version |
| :--------- | :-----: |
| Chrome     | 147+    |
| Firefox    | 146+    |
`;

test('StyledMarkdown renders GFM tables inside a horizontally scrollable wrapper', () => {
  const { container } = render(<StyledMarkdown markdown={tableMarkdown} />);
  const table = container.querySelector('table');
  expect(table).not.toBeNull();
  expect(table?.className).toContain('border-collapse');
  expect(table?.parentElement?.className).toContain('overflow-x-auto');
});

test('StyledMarkdown sizes tables to their content so wide ones scroll instead of cramming', () => {
  const { container } = render(<StyledMarkdown markdown={tableMarkdown} />);
  const table = container.querySelector('table');
  expect(table?.className).toContain('w-max');
  expect(table?.className).toContain('min-w-full');
});

test('StyledMarkdown renders table headers in emphasized primary text', () => {
  render(<StyledMarkdown markdown={tableMarkdown} />);
  const th = screen.getByRole('columnheader', { name: 'Navigateur' });
  expect(th.className).toContain('font-semibold');
  expect(th.className).toContain('text-primary');
  expect(th.className).toContain('border-plum-subtle');
});

test('StyledMarkdown renders table cells in secondary body text', () => {
  render(<StyledMarkdown markdown={tableMarkdown} />);
  const td = screen.getByRole('cell', { name: 'Chrome' });
  expect(td.tagName).toBe('TD');
  expect(td.className).toContain('text-secondary');
  expect(td.className).toContain('border-plum-subtle');
});

test('StyledMarkdown preserves GFM column alignment on cells', () => {
  render(<StyledMarkdown markdown={tableMarkdown} />);
  const td = screen.getByRole('cell', { name: '147+' });
  expect(td.style.textAlign).toBe('center');
});

const codeBlockMarkdown = `\`\`\`css
color: contrast-color(var(--surface));
\`\`\`
`;

test('StyledMarkdown renders fenced code blocks in a padded pre on bg-plum-overlay', () => {
  const { container } = render(<StyledMarkdown markdown={codeBlockMarkdown} />);
  const pre = container.querySelector('pre');
  expect(pre).not.toBeNull();
  expect(pre?.className).toContain('bg-plum-overlay');
  expect(pre?.className).toContain('rounded-lg');
  expect(pre?.className).toContain('p-4');
  expect(pre?.textContent).toContain('color: contrast-color(var(--surface));');
});

test('StyledMarkdown disables ligatures in code blocks so "--" stays as two hyphens', () => {
  const { container } = render(<StyledMarkdown markdown={codeBlockMarkdown} />);
  const pre = container.querySelector('pre');
  expect(pre?.className).toContain('[font-variant-ligatures:none]');
});

test('StyledMarkdown wraps long code-block lines instead of letting them overflow', () => {
  const { container } = render(<StyledMarkdown markdown={codeBlockMarkdown} />);
  const pre = container.querySelector('pre');
  expect(pre?.className).toContain('[&_code]:whitespace-pre-wrap');
  expect(pre?.className).toContain('[&_code]:wrap-break-word');
});

test('StyledMarkdown strips the inline chip styling from code nested in a block', () => {
  const { container } = render(<StyledMarkdown markdown={codeBlockMarkdown} />);
  const pre = container.querySelector('pre');
  expect(pre?.className).toContain('[&_code]:block');
  expect(pre?.className).toContain('[&_code]:bg-transparent');
  expect(pre?.className).toContain('[&_code]:p-0');
});

test('StyledMarkdown gives detached code blocks a copy button', () => {
  render(<StyledMarkdown markdown={codeBlockMarkdown} />);
  expect(
    screen.getByRole('button', { name: 'Copier le code' })
  ).toBeInTheDocument();
});

test('StyledMarkdown does not add a copy button to inline code', () => {
  render(<StyledMarkdown markdown={markdown} />);
  expect(screen.queryByRole('button', { name: 'Copier le code' })).toBeNull();
});

test('StyledMarkdown surfaces the fenced language as a discreet label', () => {
  render(<StyledMarkdown markdown={codeBlockMarkdown} />);
  expect(screen.getByText('css')).toBeInTheDocument();
});

const codeBlockNoLangMarkdown = `\`\`\`
plain unlabelled code
\`\`\`
`;

test('StyledMarkdown omits the label for a fenced block without a language', () => {
  const { container } = render(
    <StyledMarkdown markdown={codeBlockNoLangMarkdown} />
  );
  expect(container.querySelector('[data-code-language]')).toBeNull();
});

const hrMarkdown = `Above the rule.

---

Below the rule.
`;

test('StyledMarkdown renders thematic breaks as an accent-tinted rule with vertical rhythm', () => {
  const { container } = render(<StyledMarkdown markdown={hrMarkdown} />);
  const hr = container.querySelector('hr');
  expect(hr).not.toBeNull();
  expect(hr?.className).toContain('my-15');
  expect(hr?.className).toContain('text-(--accent-light)/25');
});
