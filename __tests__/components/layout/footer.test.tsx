import { Footer } from '@/components/layout';
import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';

beforeEach(() => {
  vi.stubEnv('BUILD_TIME', '2026-05-21T10:00:00.000Z');
});

afterEach(() => {
  vi.unstubAllEnvs();
});

test('Footer is a contentinfo landmark', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

test('Footer renders the Code source link when GITHUB_REPO_URL is set', () => {
  vi.stubEnv('GITHUB_REPO_URL', 'https://github.com/acme/tech-news');
  render(<Footer />);
  expect(screen.getByRole('link', { name: 'Code source' })).toHaveAttribute(
    'href',
    'https://github.com/acme/tech-news'
  );
});

test('Footer omits the Code source link when GITHUB_REPO_URL is unset', () => {
  vi.stubEnv('GITHUB_REPO_URL', '');
  render(<Footer />);
  expect(screen.queryByRole('link', { name: 'Code source' })).toBeNull();
});
