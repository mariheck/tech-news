import { useIsArticleRead } from '@/hooks';
import { markArticleRead } from '@/storage';
import { renderHook } from '@testing-library/react';
import { expect, test } from 'vitest';

const href = '/2026-05-18/a1';

test('useIsArticleRead returns false for an unread article', () => {
  const { result } = renderHook(() => useIsArticleRead(href));
  expect(result.current).toBe(false);
});

test('useIsArticleRead returns true for a read article', () => {
  markArticleRead(href);

  const { result } = renderHook(() => useIsArticleRead(href));
  expect(result.current).toBe(true);
});
