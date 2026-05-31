import { HeroSlideshow } from '@/components/listing';
import type { ArticleMeta } from '@/types';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

const SLIDES: ArticleMeta[] = [
  {
    slug: 'next-16',
    title: 'Next.js 16 débarque',
    excerpt: 'Excerpt un.',
    summary: 'Résumé un.',
    image: '/i1.jpg',
    date: new Date('2026-05-18T00:00:00Z'),
    readingTime: 7,
    category: 'frontend'
  },
  {
    slug: 'design-2026',
    title: 'Tendances design 2026',
    excerpt: 'Excerpt deux.',
    summary: 'Résumé deux.',
    image: '/i2.jpg',
    date: new Date('2026-05-11T00:00:00Z'),
    readingTime: 4,
    category: 'design'
  },
  {
    slug: 'claude-sonnet',
    title: 'Claude Sonnet 4.6',
    excerpt: 'Excerpt trois.',
    summary: 'Résumé trois.',
    image: '/i3.jpg',
    date: new Date('2026-05-04T00:00:00Z'),
    readingTime: 1,
    category: 'actus-ia'
  }
];

const carousel = () => screen.getByRole('region', { name: /à la une/i });
const dots = () => screen.getAllByRole('button', { name: /aller à la une/i });
// Inactive slide layers are aria-hidden, so the only heading in the a11y tree is the
// active slide's title — the stable signal for "which slide is showing".
const activeTitle = (name: string) =>
  screen.getByRole('heading', { level: 2, name });

const originalMatchMedia = window.matchMedia;

afterEach(() => {
  window.matchMedia = originalMatchMedia;
  vi.useRealTimers();
});

describe('HeroSlideshow — structure', () => {
  test('renders every slide image and links the active slide to its article', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    for (const slide of SLIDES) {
      expect(screen.getByAltText(slide.title)).toBeInTheDocument();
    }

    expect(
      screen.getByRole('link', { name: /lire l'article/i })
    ).toHaveAttribute('href', '/2026-05-18/next-16');
  });

  test('shows the active slide category, reading time and formatted date', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText(/7 minutes/)).toBeInTheDocument();
    expect(screen.getByText('18 mai 2026')).toBeInTheDocument();
  });

  test('renders one dot per slide, the first marked current', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    const allDots = dots();
    expect(allDots).toHaveLength(3);
    expect(allDots[0]).toHaveAttribute('aria-current', 'true');
    expect(allDots[1]).not.toHaveAttribute('aria-current');
  });

  test('each dot exposes a touch-sized tap zone via vertical inset expansion', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    for (const dot of dots()) {
      expect(dot.className).toContain('before:-inset-y-5');
    }
  });
});

describe('HeroSlideshow — manual navigation', () => {
  test('ArrowLeft from the first slide wraps to the last', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    fireEvent.keyDown(carousel(), { key: 'ArrowLeft' });

    expect(activeTitle('Claude Sonnet 4.6')).toBeInTheDocument();
  });

  test('ArrowRight from the last slide wraps back to the first', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    fireEvent.click(dots()[2]);
    fireEvent.keyDown(carousel(), { key: 'ArrowRight' });

    expect(activeTitle('Next.js 16 débarque')).toBeInTheDocument();
  });

  test('clicking a dot jumps straight to that slide', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    fireEvent.click(dots()[2]);

    expect(dots()[2]).toHaveAttribute('aria-current', 'true');
    expect(activeTitle('Claude Sonnet 4.6')).toBeInTheDocument();
  });

  test('ArrowRight and ArrowLeft move between slides', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    fireEvent.keyDown(carousel(), { key: 'ArrowRight' });
    expect(activeTitle('Tendances design 2026')).toBeInTheDocument();

    fireEvent.keyDown(carousel(), { key: 'ArrowLeft' });
    expect(activeTitle('Next.js 16 débarque')).toBeInTheDocument();
  });
});

describe('HeroSlideshow — autoplay', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  test('auto-advances to the next slide after 6 seconds', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    act(() => {
      vi.advanceTimersByTime(6000);
    });

    expect(activeTitle('Tendances design 2026')).toBeInTheDocument();
  });

  test('pauses while the carousel is hovered', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    fireEvent.mouseEnter(carousel());
    act(() => {
      vi.advanceTimersByTime(6000);
    });

    expect(activeTitle('Next.js 16 débarque')).toBeInTheDocument();
  });

  test('does not auto-advance under prefers-reduced-motion', () => {
    window.matchMedia = vi.fn((query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn()
    })) as unknown as typeof window.matchMedia;

    render(<HeroSlideshow slides={SLIDES} />);

    act(() => {
      vi.advanceTimersByTime(6000);
    });

    expect(activeTitle('Next.js 16 débarque')).toBeInTheDocument();
  });
});

describe('HeroSlideshow — single slide', () => {
  test('renders no navigation dots when there is only one slide', () => {
    render(<HeroSlideshow slides={[SLIDES[0]!]} />);

    expect(
      screen.queryByRole('button', { name: /aller à la une/i })
    ).not.toBeInTheDocument();
  });
});
