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
  test('renders every slide image', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    for (const slide of SLIDES) {
      expect(screen.getByAltText(slide.title)).toBeInTheDocument();
    }
  });

  test('turns the active slide title into the link to its article', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    expect(
      screen.getByRole('link', { name: 'Next.js 16 débarque' })
    ).toHaveAttribute('href', '/2026-05-18/next-16');
  });

  test('exposes a single link — the whole active slide, no separate CTA', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(
      screen.queryByRole('link', { name: /lire l'article/i })
    ).not.toBeInTheDocument();
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

// jsdom evaluates no CSS, so hover affordance is asserted on the structural
// contract: the section is a hover group and its children carry group-hover variants.
describe('HeroSlideshow — hover affordance', () => {
  test('the section is a hover group', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    expect(carousel().className.split(/\s+/)).toContain('group');
  });

  test('the image panel lifts and elevates on section hover, like a card', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    const panel = carousel().firstElementChild as HTMLElement;
    expect(panel.className).toContain('group-hover:-translate-y-1');
    expect(panel.className).toContain('group-hover:shadow-lift');
  });

  // The hover lift turns the image panel into a stacking context, which would trap
  // the dots beneath the stretched article link. The panel stays above the link
  // (z-10) but transparent to clicks (pointer-events-none); only the dots re-enable
  // pointer events, so they keep working while the image area still opens the article.
  test('keeps the dots clickable above the stretched article link', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    const panel = carousel().firstElementChild as HTMLElement;
    expect(panel.className).toContain('z-10');
    expect(panel.className).toContain('pointer-events-none');

    const dotsContainer = dots()[0]!.closest('div')!;
    expect(dotsContainer.className).toContain('pointer-events-auto');
  });

  test('the carousel root scopes --accent to the active slide accent', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    // First slide is 'frontend' → turquoise. The accent vars live on the root so
    // both the image panel's --shadow-lift and the content's --accent-light read them.
    expect(carousel().style.getPropertyValue('--accent')).toBe(
      'var(--color-accent-turquoise)'
    );
    expect(carousel().style.getPropertyValue('--accent-light')).toBe(
      'var(--color-accent-turquoise-light)'
    );
  });

  test('the root accent follows the active slide', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    fireEvent.click(dots()[1]); // second slide is 'design' → raspberry

    expect(carousel().style.getPropertyValue('--accent')).toBe(
      'var(--color-accent-raspberry)'
    );
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

describe('HeroSlideshow — swipe', () => {
  const swipe = (
    from: { x: number; y: number },
    to: { x: number; y: number }
  ) => {
    fireEvent.touchStart(carousel(), {
      touches: [{ clientX: from.x, clientY: from.y }]
    });
    fireEvent.touchEnd(carousel(), {
      changedTouches: [{ clientX: to.x, clientY: to.y }]
    });
  };

  test('swiping left advances to the next slide', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    swipe({ x: 240, y: 100 }, { x: 40, y: 100 });

    expect(activeTitle('Tendances design 2026')).toBeInTheDocument();
  });

  test('swiping right from the first slide wraps to the last', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    swipe({ x: 40, y: 100 }, { x: 240, y: 100 });

    expect(activeTitle('Claude Sonnet 4.6')).toBeInTheDocument();
  });

  test('a swipe below the horizontal threshold does not change slide', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    swipe({ x: 200, y: 100 }, { x: 170, y: 100 });

    expect(activeTitle('Next.js 16 débarque')).toBeInTheDocument();
  });

  test('a mostly-vertical drag does not change slide', () => {
    render(<HeroSlideshow slides={SLIDES} />);

    swipe({ x: 200, y: 100 }, { x: 130, y: 300 });

    expect(activeTitle('Next.js 16 débarque')).toBeInTheDocument();
  });

  test('a swipe is inert when there is only one slide', () => {
    render(<HeroSlideshow slides={[SLIDES[0]!]} />);

    swipe({ x: 240, y: 100 }, { x: 40, y: 100 });

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
