'use client';

import { CategoryBadge } from '@/components/category/category-badge';
import type { ArticleMeta } from '@/types';
import { accentToCssVar } from '@/utils/accent-to-css-var';
import { articleToCardProps } from '@/utils/article-to-card-props';
import { formatLongDate } from '@/utils/format-long-date';
import classNames from 'classnames';
import { ClockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useEffect, useRef, useState } from 'react';

type HeroSlideshowProps = {
  slides: ArticleMeta[];
};

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD_PX = 50;

export const HeroSlideshow = ({ slides }: HeroSlideshowProps) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = slides.length;
  const hasControls = count > 1;

  const slideTo = (index: number) => {
    setActive((index + count) % count);
  };

  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!hasControls || paused || reducedRef.current) return;

    const id = window.setInterval(
      () => setActive((current) => (current + 1) % count),
      AUTOPLAY_MS
    );
    return () => window.clearInterval(id);
  }, [count, hasControls, paused]);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStartRef.current = touch
      ? { x: touch.clientX, y: touch.clientY }
      : null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    const touch = event.changedTouches[0];
    if (!hasControls || !start || !touch) return;

    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    // Ignore short drags and mostly-vertical gestures so page scroll isn't hijacked.
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) <= Math.abs(dy))
      return;

    slideTo(active + (dx < 0 ? 1 : -1));
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!hasControls) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      slideTo(active + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      slideTo(active - 1);
    }
  };

  if (!slides[active]) return null;

  const activeAccent = articleToCardProps(slides[active]).accent;

  return (
    <section
      aria-roledescription='carousel'
      aria-label='À la une des dernières semaines'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={classNames(
        'group relative grid grid-cols-1 items-stretch',
        'md:gap-[clamp(1.75rem,4vw,3.5rem)]',
        'md:grid-cols-2 lg:grid-cols-[1.85fr_1fr]'
      )}
    >
      <div
        style={{ '--accent': accentToCssVar[activeAccent] } as CSSProperties}
        className={classNames(
          'relative z-10 w-full overflow-hidden rounded-2xl pointer-events-none',
          'bg-plum-overlay aspect-square lg:aspect-video',
          'shadow-rest group-hover:shadow-lift',
          'motion-safe:group-hover:-translate-y-1',
          'transition-[translate,box-shadow] ease-in-out-circ duration-300'
        )}
      >
        {slides.map((slide, index) => {
          const card = articleToCardProps(slide);
          const isActive = index === active;
          return (
            <div
              key={`${slide.slug}-${index}`}
              aria-hidden={!isActive}
              inert={!isActive}
              className={classNames(
                'absolute inset-0 transition-opacity duration-400 ease-in-out-circ',
                {
                  'opacity-100': isActive,
                  'opacity-0': !isActive
                }
              )}
            >
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                sizes='(min-width: 1024px) 60vw, 100vw'
                priority={index === 0}
                className='object-cover'
              />
            </div>
          );
        })}
      </div>

      <div className='grid h-full'>
        {slides.map((slide, index) => {
          const card = articleToCardProps(slide);
          const isActive = index === active;
          return (
            <div
              key={`${slide.slug}-${index}`}
              aria-hidden={!isActive}
              inert={!isActive}
              className={classNames(
                'col-start-1 row-start-1 flex h-full flex-col pt-5 pb-2',
                'transition-opacity duration-400 ease-in-out-circ',
                {
                  'opacity-100': isActive,
                  'opacity-0': !isActive
                }
              )}
            >
              <div className='grow flex flex-col gap-4 md:gap-6'>
                <div className='hidden md:block'>
                  <CategoryBadge label={card.badge} accent={card.accent} />
                </div>

                <h2 className='text-headline text-balance text-primary'>
                  <Link
                    href={card.href}
                    tabIndex={isActive ? undefined : -1}
                    className={classNames(
                      'outline-none transition-colors',
                      // Stretched hit area: the link covers the whole carousel
                      // section so a tap anywhere (outside the dots) opens the article.
                      'after:absolute after:inset-0 after:rounded-2xl after:content-[""]',
                      'focus-visible:after:ring-2 focus-visible:after:ring-(--accent)'
                    )}
                  >
                    {slide.title}
                  </Link>
                </h2>

                <div className='flex items-center gap-3 font-mono text-[0.8125rem] text-secondary'>
                  <time dateTime={slide.date.toISOString().slice(0, 10)}>
                    {formatLongDate(slide.date)}
                  </time>
                  <span aria-hidden='true'>·</span>
                  <span className='inline-flex items-center gap-1.75'>
                    <ClockIcon aria-hidden='true' strokeWidth={1.7} size={12} />
                    <span>
                      {slide.readingTime} minute
                      {slide.readingTime > 1 ? 's' : ''} de lecture
                    </span>
                  </span>
                </div>

                <p className='text-secondary'>{slide.excerpt}</p>

                {hasControls && (
                  <div
                    className={classNames(
                      'mt-auto mx-auto md:mr-0',
                      'pointer-events-auto',
                      'flex shrink-0 items-center justify-between gap-4'
                    )}
                  >
                    <ul className='flex items-center gap-2.5'>
                      {slides.map((slide, index) => {
                        const isActive = index === active;
                        return (
                          <li key={`${slide.slug}-${index}`}>
                            <button
                              type='button'
                              aria-label={`Aller à la une ${index + 1}`}
                              aria-current={isActive ? 'true' : undefined}
                              onClick={() => slideTo(index)}
                              className={classNames(
                                'cursor-pointer',
                                'relative h-1.25 rounded-full',
                                'transition-[width,background-color] duration-300 ease-out-circ',
                                'before:absolute before:-inset-x-1 before:-inset-y-5 before:content-[""]',
                                {
                                  'w-8.5 bg-primary': isActive,
                                  'w-5.5 bg-primary/60 hover:bg-primary/90 focus-visible:bg-primary/90':
                                    !isActive
                                }
                              )}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
