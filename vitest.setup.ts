import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

window.scrollTo = vi.fn() as typeof window.scrollTo;

// jsdom ships no matchMedia. Default to "no preference" so components that gate
// behaviour on prefers-reduced-motion (e.g. the hero autoplay) run their motion
// path; individual tests override window.matchMedia to assert the reduced branch.
window.matchMedia =
  window.matchMedia ??
  (vi.fn((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn()
  })) as unknown as typeof window.matchMedia);

// No pre-existing test uses localStorage, so clearing it before every test
// isolates the storage-backed suites (read-state) without a per-file beforeEach.
beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  cleanup();
});
