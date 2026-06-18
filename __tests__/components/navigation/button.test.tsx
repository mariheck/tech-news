import { Button } from '@/components/navigation';
import { fireEvent, render, screen } from '@testing-library/react';
import { RotateCcw } from 'lucide-react';
import { expect, test, vi } from 'vitest';

test('Button renders its label as a button', () => {
  render(<Button>Réessayer</Button>);
  expect(
    screen.getByRole('button', { name: 'Réessayer' })
  ).toBeInTheDocument();
});

test('Button defaults to type="button"', () => {
  render(<Button>Réessayer</Button>);
  expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
});

test('Button forwards the type prop', () => {
  render(<Button type='submit'>Envoyer</Button>);
  expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
});

test('Button calls onClick when clicked', () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Réessayer</Button>);

  fireEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalledOnce();
});

test('Button renders an optional icon as decorative', () => {
  const { container } = render(<Button icon={RotateCcw}>Réessayer</Button>);
  const icon = container.querySelector('svg');
  expect(icon).toHaveAttribute('aria-hidden', 'true');
});

test('Button is disabled when the disabled prop is set', () => {
  const onClick = vi.fn();
  render(
    <Button disabled onClick={onClick}>
      Réessayer
    </Button>
  );
  const button = screen.getByRole('button');

  expect(button).toBeDisabled();
  fireEvent.click(button);
  expect(onClick).not.toHaveBeenCalled();
});
