'use client';

import { isArticleRead, subscribeToStorage } from '@/storage';
import { useSyncExternalStore } from 'react';

// Reads the read-state of an article from localStorage as a React value.
// getServerSnapshot returns false so the server and the first client render
// agree (nothing shown) — the real value syncs right after hydration.

export const useIsArticleRead = (href: string): boolean => {
  const getSnapshot = () => isArticleRead(href);
  const getServerSnapshot = () => false;

  return useSyncExternalStore(
    subscribeToStorage,
    getSnapshot,
    getServerSnapshot
  );
};
