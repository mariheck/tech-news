import { ScrollToTop } from '@/components/shared';
import { render } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';

let currentPathname = '/2026-05-18/article-a';

vi.mock('next/navigation', () => ({
  usePathname: () => currentPathname
}));

const scrollTo = vi.fn();

beforeEach(() => {
  currentPathname = '/2026-05-18/article-a';
  scrollTo.mockClear();
  vi.stubGlobal('scrollTo', scrollTo);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

test('ScrollToTop renders nothing in the DOM', () => {
  const { container } = render(<ScrollToTop />);
  expect(container).toBeEmptyDOMElement();
});

test('ScrollToTop calls window.scrollTo(0, 0) on mount', () => {
  render(<ScrollToTop />);
  expect(scrollTo).toHaveBeenCalledWith(0, 0);
});

test('ScrollToTop scrolls again when the pathname changes', () => {
  const { rerender } = render(<ScrollToTop />);
  expect(scrollTo).toHaveBeenCalledTimes(1);

  currentPathname = '/2026-05-18/article-b';
  rerender(<ScrollToTop />);
  expect(scrollTo).toHaveBeenCalledTimes(2);
  expect(scrollTo).toHaveBeenLastCalledWith(0, 0);
});

test('ScrollToTop does not scroll again when the pathname is unchanged', () => {
  const { rerender } = render(<ScrollToTop />);
  expect(scrollTo).toHaveBeenCalledTimes(1);

  rerender(<ScrollToTop />);
  expect(scrollTo).toHaveBeenCalledTimes(1);
});
