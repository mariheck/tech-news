import type { AccentName, ArticleRoute } from '@/types';
import { accentToCssVar, accentToLightCssVar } from '@/utils';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ReadIndicator } from './read-indicator';

type CardVariant = 'large' | 'medium' | 'horizontal';

const variantToImageSizes: Record<CardVariant, string> = {
  large: '(min-width: 1024px) 50vw, 100vw',
  medium: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  horizontal: '(min-width: 1024px) 25vw, 50vw'
};

type CardProps = {
  variant?: CardVariant;
  accent?: AccentName;
  href: ArticleRoute;
  title: string;
  excerpt: string;
  category?: string;
  image: { src: string; alt: string };
};

export const Card = ({
  variant = 'medium',
  accent,
  href,
  title,
  excerpt,
  category,
  image
}: CardProps) => {
  return (
    <Link
      href={href}
      style={
        accent
          ? ({
              '--accent': accentToCssVar[accent],
              '--accent-light': accentToLightCssVar[accent]
            } as CSSProperties)
          : undefined
      }
      className={classNames(
        'group flex w-full gap-4.5',
        'rounded-[0.875rem] border border-plum-subtle p-4.5',
        'bg-plum-elevated no-underline',
        'shadow-rest hover:shadow-lift focus-visible:shadow-lift',
        'motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1',
        'transition-[translate,box-shadow]',
        'duration-300 ease-in-out-circ',
        {
          'max-w-full min-w-70 flex-col': variant === 'large',
          'max-w-full min-w-55 flex-col': variant === 'medium',
          'max-w-full min-w-80 items-start': variant === 'horizontal'
        }
      )}
    >
      <div
        className={classNames(
          'relative aspect-video overflow-hidden rounded-[0.625rem] bg-plum-overlay',
          { 'shrink-0 basis-[42%]': variant === 'horizontal' }
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={variantToImageSizes[variant]}
          className='object-cover'
        />
        <span className='absolute top-2.5 right-3 flex flex-col items-end gap-2'>
          <span className='text-label text-[0.6rem] text-(--accent-light)'>
            {category}
          </span>
          <ReadIndicator href={href} />
        </span>
      </div>
      <div
        className={classNames('flex flex-col', {
          'gap-2': variant !== 'large',
          'gap-3': variant === 'large'
        })}
      >
        <h3
          className={classNames(
            'line-clamp-2 leading-[1.2] font-semibold tracking-[-0.012em] text-balance text-primary',
            {
              'text-[clamp(1.5rem,2.2vw,1.875rem)]': variant === 'large',
              'text-xl': variant === 'medium',
              'text-[1.065rem]': variant === 'horizontal'
            }
          )}
        >
          {title}
        </h3>
        <p
          className={classNames('leading-[1.55] text-secondary', {
            'line-clamp-3 text-[1.07rem]': variant === 'large',
            'line-clamp-2 text-base': variant === 'medium',
            'line-clamp-2 text-[0.95rem]': variant === 'horizontal'
          })}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  );
};
