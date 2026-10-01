// Internal Next path with no public export: recheck it on every Next upgrade.
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import type { NextRouter } from 'next/router';
import type { ReactNode } from 'react';
import { vi } from 'vitest';

// Under Vitest, `next/link` resolves to its Pages Router build, which only
// navigates (and calls `onNavigate`) inside a RouterContext.
export const makeRouter = () => {
  const router = {
    push: vi.fn(() => Promise.resolve(true)),
    replace: vi.fn(() => Promise.resolve(true)),
    prefetch: vi.fn(() => Promise.resolve())
  };

  const RouterWrapper = ({ children }: { children: ReactNode }) => (
    <RouterContext.Provider value={router as unknown as NextRouter}>
      {children}
    </RouterContext.Provider>
  );

  return { router, RouterWrapper };
};
