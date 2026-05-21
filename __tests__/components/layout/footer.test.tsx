import { Footer } from '@/components/layout';
import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';

beforeEach(() => {
  vi.stubEnv('BUILD_TIME', '2026-05-21T10:00:00.000Z');
});

test('Footer is a contentinfo landmark', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
