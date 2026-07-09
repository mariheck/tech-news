import { ReadIndicator } from '@/components/listing';
import { markArticleRead } from '@/storage';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const href = '/2026-05-18/a1';

test('ReadIndicator renders nothing for an unread article', () => {
  const { container } = render(<ReadIndicator href={href} />);
  expect(container).toBeEmptyDOMElement();
});

test('ReadIndicator shows "Vu" for a read article', () => {
  markArticleRead(href);

  render(<ReadIndicator href={href} />);
  expect(screen.getByText('Vu')).toBeInTheDocument();
});

test('ReadIndicator hides its icon from assistive tech', () => {
  markArticleRead(href);

  const { container } = render(<ReadIndicator href={href} />);
  expect(container.querySelector('svg')).toHaveAttribute(
    'aria-hidden',
    'true'
  );
});

test('ReadIndicator matches the category marker size in the tertiary tone, inline with its icon', () => {
  markArticleRead(href);

  render(<ReadIndicator href={href} />);
  const indicator = screen.getByText('Vu');
  expect(indicator).toHaveClass(
    'inline-flex',
    'items-center',
    'gap-1',
    'text-label',
    'text-[0.6rem]',
    'text-tertiary'
  );
});
