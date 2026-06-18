import ErrorPage from '@/app/error';
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';

const commonProps = {
  error: new Error('boom') as Error & { digest?: string },
  reset: () => {}
};

// The boundary logs the error on mount; silence it so test output stays
// pristine, and keep the spy around for the logging assertion.
let consoleError: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  consoleError.mockRestore();
});

test('Error page displays the 500 status code as its heading', () => {
  render(<ErrorPage {...commonProps} />);
  expect(
    screen.getByRole('heading', { level: 1, name: '500' })
  ).toBeInTheDocument();
});

test('Error page displays a reassuring message', () => {
  render(<ErrorPage {...commonProps} />);
  expect(screen.getByText('Une erreur est survenue.')).toBeInTheDocument();
});

test('Error page retries the segment when the user clicks réessayer', () => {
  const reset = vi.fn();
  render(<ErrorPage {...commonProps} reset={reset} />);

  fireEvent.click(screen.getByRole('button', { name: 'Réessayer' }));

  expect(reset).toHaveBeenCalledOnce();
});

test('Error page logs the error for debugging', () => {
  const error = new Error('boom') as Error & { digest?: string };
  render(<ErrorPage {...commonProps} error={error} />);

  expect(consoleError).toHaveBeenCalledWith(error);
});

test('Error page sets the document title', () => {
  render(<ErrorPage {...commonProps} />);
  expect(document.title).toBe('500 | tech.news');
});
