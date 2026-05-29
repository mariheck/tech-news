import { MetaData } from '@/components/article';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = {
  date: new Date('2026-05-18T00:00:00Z'),
  readingTime: 8
};

test('MetaData renders the Publié and Lecture labels', () => {
  render(<MetaData {...commonProps} />);
  expect(screen.getByText('Publié')).toBeInTheDocument();
  expect(screen.getByText('Lecture')).toBeInTheDocument();
});

test('MetaData renders the formatted long date as the Publié value', () => {
  render(<MetaData {...commonProps} />);
  expect(screen.getByText('18 mai 2026')).toBeInTheDocument();
});

test('MetaData renders the reading time as "<n> minutes"', () => {
  render(<MetaData {...commonProps} />);
  expect(screen.getByText('8 minutes')).toBeInTheDocument();
});

test('MetaData renders a singular "minute" for a one-minute read', () => {
  render(<MetaData {...commonProps} readingTime={1} />);
  expect(screen.getByText('1 minute')).toBeInTheDocument();
});

test('MetaData uses dt/dd semantic markup', () => {
  const { container } = render(<MetaData {...commonProps} />);
  expect(container.querySelector('dl')).not.toBeNull();
  expect(container.querySelectorAll('dt')).toHaveLength(2);
  expect(container.querySelectorAll('dd')).toHaveLength(2);
});

test('MetaData labels carry the text-label utility (with overridden font-weight)', () => {
  render(<MetaData {...commonProps} />);
  expect(screen.getByText('Publié').className).toContain('text-label');
  expect(screen.getByText('Lecture').className).toContain('text-label');
});

test('MetaData values use mono at 0.8125rem text-primary', () => {
  render(<MetaData {...commonProps} />);
  const date = screen.getByText('18 mai 2026');
  expect(date.className).toContain('font-mono');
  expect(date.className).toContain('text-[0.8125rem]');
  expect(date.className).toContain('text-primary');
});

test('MetaData forwards extra classes via the className prop', () => {
  const { container } = render(
    <MetaData {...commonProps} className='py-4.5 border-y' />
  );
  const dl = container.querySelector('dl');
  expect(dl?.className).toContain('py-4.5');
  expect(dl?.className).toContain('border-y');
});
