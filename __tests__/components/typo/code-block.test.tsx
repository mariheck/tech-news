import { CodeBlock } from '@/components/typo/code-block';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';

const writeText = vi.fn(() => Promise.resolve());

beforeEach(() => {
  writeText.mockClear();
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true
  });
});

afterEach(() => {
  vi.useRealTimers();
});

const renderBlock = () =>
  render(
    <CodeBlock>
      <code>{'color: contrast-color(var(--surface));'}</code>
    </CodeBlock>
  );

test('CodeBlock exposes a copy button with an accessible name', () => {
  renderBlock();
  expect(
    screen.getByRole('button', { name: 'Copier le code' })
  ).toBeInTheDocument();
});

test('CodeBlock copies the code text to the clipboard on click', () => {
  renderBlock();
  fireEvent.click(screen.getByRole('button', { name: 'Copier le code' }));
  expect(writeText).toHaveBeenCalledWith(
    'color: contrast-color(var(--surface));'
  );
});

test('CodeBlock announces the copied state after a successful copy', async () => {
  renderBlock();
  fireEvent.click(screen.getByRole('button', { name: 'Copier le code' }));
  expect(await screen.findByRole('status')).toHaveTextContent('Copié');
});

test('CodeBlock ignores clicks while already in the copied state', async () => {
  vi.useFakeTimers();
  renderBlock();
  const button = screen.getByRole('button', { name: 'Copier le code' });

  await act(async () => {
    fireEvent.click(button);
  });
  expect(screen.getByRole('status')).toHaveTextContent('Copié');
  expect(writeText).toHaveBeenCalledTimes(1);

  // Extra clicks during the copied window must be no-ops: no re-copy, no
  // rescheduled reset.
  await act(async () => {
    await vi.advanceTimersByTimeAsync(500);
  });
  await act(async () => {
    fireEvent.click(button);
    fireEvent.click(button);
  });
  expect(writeText).toHaveBeenCalledTimes(1);

  // The state reverts 1500ms after the original click, unaffected by the
  // ignored clicks.
  await act(async () => {
    await vi.advanceTimersByTimeAsync(1000);
  });
  expect(screen.getByRole('status')).not.toHaveTextContent('Copié');
});
