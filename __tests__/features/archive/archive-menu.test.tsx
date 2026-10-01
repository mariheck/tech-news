import { ArchiveMenu } from '@/features/archive';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';
import { makeRouter } from '@/__tests__/fixtures/router';

const months = ['2026-08', '2026-07', '2025-11'];

const open = () => fireEvent.click(screen.getByRole('button'));

test('ArchiveMenu shows the current month on its trigger', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  expect(
    screen.getByRole('button', { name: 'Mois affiché : août 2026' })
  ).toBeInTheDocument();
});

test('ArchiveMenu renders nothing for a month outside the archive', () => {
  const { container } = render(
    <ArchiveMenu months={months} current='2026-03' />
  );
  expect(container).toBeEmptyDOMElement();
});

test('ArchiveMenu starts collapsed', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

test('ArchiveMenu expands when its trigger is activated', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('ArchiveMenu links every archived month to its route', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  expect(screen.getByRole('link', { name: 'juillet 2026' })).toHaveAttribute(
    'href',
    '/archives/2026-07'
  );
});

test('ArchiveMenu groups the months by year', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  expect(
    screen.getByRole('heading', { level: 2, name: '2025' })
  ).toBeInTheDocument();
});

test('ArchiveMenu marks the current month as the current page', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  expect(screen.getByRole('link', { name: 'août 2026' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});

test('ArchiveMenu leaves a month with no edition out of the links', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  expect(
    screen.queryByRole('link', { name: 'mars 2026' })
  ).not.toBeInTheDocument();
});

test('ArchiveMenu collapses on Escape', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

test('ArchiveMenu collapses once focus moves out of it', () => {
  render(
    <>
      <ArchiveMenu months={months} current='2026-08' />
      <a href='#after'>Après</a>
    </>
  );
  open();
  act(() => screen.getByRole('link', { name: 'Après' }).focus());
  expect(
    screen.getByRole('button', { name: 'Mois affiché : août 2026' })
  ).toHaveAttribute('aria-expanded', 'false');
});

test('ArchiveMenu stays open while focus moves through its months', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  act(() => screen.getByRole('link', { name: 'juillet 2026' }).focus());
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('ArchiveMenu collapses once a month is followed', () => {
  render(<ArchiveMenu months={months} current='2026-08' />, {
    wrapper: makeRouter().RouterWrapper
  });
  open();
  fireEvent.click(screen.getByRole('link', { name: 'juillet 2026' }));
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

// A modified click opens a new tab, so the menu stays open in the current one.
test('ArchiveMenu stays open when a month is opened in a new tab', () => {
  // Link lets a modified click through to the browser, which jsdom cannot follow.
  const preventNavigation = (event: Event) => event.preventDefault();
  document.addEventListener('click', preventNavigation);

  render(<ArchiveMenu months={months} current='2026-08' />, {
    wrapper: makeRouter().RouterWrapper
  });
  open();
  fireEvent.click(screen.getByRole('link', { name: 'juillet 2026' }), {
    metaKey: true
  });

  document.removeEventListener('click', preventNavigation);
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('ArchiveMenu carries the active category over to each month', () => {
  render(<ArchiveMenu months={months} current='2026-08' category='design' />);
  open();
  expect(screen.getByRole('link', { name: 'juillet 2026' })).toHaveAttribute(
    'href',
    '/archives/2026-07?cat=design'
  );
});

test('ArchiveMenu keeps every archived month of a year reachable', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  const section = screen
    .getByRole('heading', { level: 2, name: '2026' })
    .closest('section') as HTMLElement;
  expect(within(section).getAllByRole('link')).toHaveLength(2);
});

const panel = () =>
  document.getElementById(
    screen.getByRole('button').getAttribute('aria-controls') as string
  );

test('ArchiveMenu unfolds from the trigger it hangs under', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  expect(panel()).toHaveClass('origin-top-right');
});

// Below md a year wraps onto two rows 30px apart, so the 44px hit area would
// overlap the next row's pills: it only applies from md up.
test('ArchiveMenu widens each month hit area to 44px from md up', () => {
  render(<ArchiveMenu months={months} current='2026-08' />);
  open();
  expect(screen.getByRole('link', { name: 'juillet 2026' })).toHaveClass(
    'relative',
    'md:before:absolute',
    'md:before:-inset-y-3'
  );
});
