import { MarkAsRead } from '@/components/article';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

test('MarkAsRead renders nothing in the DOM', () => {
  const { container } = render(<MarkAsRead href='/2026-05-18/a1' />);
  expect(container).toBeEmptyDOMElement();
});

test('MarkAsRead stores its href on mount', () => {
  render(<MarkAsRead href='/2026-05-18/a1' />);
  expect(localStorage.getItem('read-articles')).toBe('["/2026-05-18/a1"]');
});

test('MarkAsRead stores the new href when it changes', () => {
  const { rerender } = render(<MarkAsRead href='/2026-05-18/a1' />);
  rerender(<MarkAsRead href='/2026-05-18/a2' />);

  expect(localStorage.getItem('read-articles')).toBe(
    '["/2026-05-18/a1","/2026-05-18/a2"]'
  );
});
