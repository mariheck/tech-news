import type { AccentName } from '@/types';
import { accentToCssVar } from '@/utils';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { CategoryBadge } from './category-badge';

type CardVariant = 'large' | 'medium' | 'horizontal';

type CardProps = {
  variant?: CardVariant;
  accent?: AccentName;
  href: string;
  title: string;
  excerpt: string;
  badge?: string;
  image: { src: string; alt: string };
};

export const Card = ({
  variant = 'medium',
  accent,
  href,
  title,
  excerpt,
  badge,
  image
}: CardProps) => {
  return (
    <Link
      href={href}
      style={
        accent
          ? ({ '--accent': accentToCssVar[accent] } as CSSProperties)
          : undefined
      }
      className={classNames(
        'group flex gap-4.5 w-full',
        'p-4.5 border border-plum-subtle rounded-[0.875rem]',
        'bg-plum-elevated no-underline',
        'shadow-rest hover:shadow-lift focus-visible:shadow-lift',
        'hover:-translate-y-1 focus-visible:-translate-y-1',
        'transition-[transform, box-shadow]',
        'ease-in-out-circ duration-300',
        {
          'flex-col min-w-70 max-w-full': variant === 'large',
          'flex-col min-w-55 max-w-full': variant === 'medium',
          'items-start min-w-80 max-w-full': variant === 'horizontal'
        }
      )}
    >
      <div
        className={classNames(
          'relative aspect-video overflow-hidden rounded-[0.625rem] bg-plum-overlay',
          { 'basis-[42%] shrink-0': variant === 'horizontal' }
        )}
      >
        <Image src={image.src} alt={image.alt} fill className='object-cover' />
      </div>
      <div className='flex flex-col gap-2'>
        {badge && (
          <div className='mb-1'>
            <CategoryBadge label={badge} accent={accent ?? 'peach'} />
          </div>
        )}
        <h3
          className={classNames(
            'leading-[1.2] tracking-[-0.012em] font-semibold text-primary text-balance',
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
            'text-[1.07rem] line-clamp-3': variant === 'large',
            'text-base line-clamp-2': variant === 'medium',
            'text-[0.95rem] line-clamp-2': variant === 'horizontal'
          })}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  );
};
