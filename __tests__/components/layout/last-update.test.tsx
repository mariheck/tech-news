import { LastUpdate } from '@/components/layout/last-update';
import { render } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';

beforeEach(() => {
  vi.stubEnv('BUILD_TIME', '2026-05-21T10:00:00.000Z');
});

test('LastUpdate renders the build date as a <time> element', () => {
  const { container } = render(<LastUpdate />);
  const time = container.querySelector('time');
  expect(time).not.toBeNull();
  expect(time).toHaveAttribute('datetime', '2026-05-21T10:00:00.000Z');
  expect(time?.textContent).toMatch(/^Dernière mise à jour\s*:\s*21 mai 2026$/);
});
