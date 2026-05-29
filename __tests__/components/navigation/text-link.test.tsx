import { TextLink } from '@/components/navigation';
import { render, screen } from '@testing-library/react';
import { MoveRightIcon } from 'lucide-react';
import { expect, test } from 'vitest';

test('TextLink renders its children as the accessible name', () => {
  render(<TextLink href='/'>Suivant</TextLink>);
  expect(screen.getByRole('link', { name: 'Suivant' })).toBeInTheDocument();
});

test('TextLink renders an anchor with the provided href', () => {
  render(<TextLink href='/archives'>Suivant</TextLink>);
  expect(screen.getByRole('link', { name: 'Suivant' })).toHaveAttribute(
    'href',
    '/archives'
  );
});

test('TextLink renders no icon when the icon prop is omitted', () => {
  const { container } = render(<TextLink href='/'>Suivant</TextLink>);
  expect(container.querySelector('svg')).toBeNull();
});

test('TextLink places the icon before the label by default', () => {
  render(
    <TextLink href='/' icon={MoveRightIcon}>
      Suivant
    </TextLink>
  );
  const link = screen.getByRole('link', { name: 'Suivant' });
  expect(link.firstChild).toBe(link.querySelector('svg'));
});

test('TextLink places the icon after the label when iconPosition is right', () => {
  render(
    <TextLink href='/' icon={MoveRightIcon} iconPosition='right'>
      Suivant
    </TextLink>
  );
  const link = screen.getByRole('link', { name: 'Suivant' });
  expect(link.lastChild).toBe(link.querySelector('svg'));
});

test('TextLink renders the icon as decorative at the primitive-controlled size', () => {
  const { container } = render(
    <TextLink href='/' icon={MoveRightIcon}>
      Suivant
    </TextLink>
  );
  const svg = container.querySelector('svg');
  expect(svg).toHaveAttribute('aria-hidden', 'true');
  expect(svg).toHaveAttribute('width', '12');
  expect(svg).toHaveAttribute('height', '12');
  expect(svg).toHaveAttribute('stroke-width', '1.7');
});

test('TextLink uses mono styling at text-secondary scale', () => {
  render(<TextLink href='/'>Suivant</TextLink>);
  const link = screen.getByRole('link', { name: 'Suivant' });
  expect(link.className).toContain('font-mono');
  expect(link.className).toMatch(/text-secondary/);
});

test('TextLink lifts to text-primary on hover and focus-visible', () => {
  render(<TextLink href='/'>Suivant</TextLink>);
  const link = screen.getByRole('link', { name: 'Suivant' });
  expect(link.className).toContain('hover:text-primary');
  expect(link.className).toContain('focus-visible:text-primary');
});

test('TextLink animates the colour transition', () => {
  render(<TextLink href='/'>Suivant</TextLink>);
  const link = screen.getByRole('link', { name: 'Suivant' });
  expect(link.className).toContain('transition-colors');
  expect(link.className).toContain('duration-200');
});

test('TextLink expands its hit area via a before pseudo-element', () => {
  render(<TextLink href='/'>Suivant</TextLink>);
  const link = screen.getByRole('link', { name: 'Suivant' });
  expect(link.className).toContain('relative');
  expect(link.className).toContain('before:absolute');
  expect(link.className).toContain('before:-inset-1');
  expect(link.className).toContain("before:content-['']");
});

test('TextLink merges a custom className', () => {
  render(
    <TextLink href='/' className='mb-4'>
      Suivant
    </TextLink>
  );
  expect(screen.getByRole('link', { name: 'Suivant' }).className).toContain(
    'mb-4'
  );
});

test('TextLink opens external links in a new tab with a safe rel', () => {
  render(
    <TextLink href='https://example.com' external>
      Code source
    </TextLink>
  );
  const link = screen.getByRole('link', { name: 'Code source' });
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});

test('TextLink stays in-tab by default with no target or rel', () => {
  render(<TextLink href='/'>Accueil</TextLink>);
  const link = screen.getByRole('link', { name: 'Accueil' });
  expect(link).not.toHaveAttribute('target');
  expect(link).not.toHaveAttribute('rel');
});
