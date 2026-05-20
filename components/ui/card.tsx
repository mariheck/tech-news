import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type CardVariant = 'large' | 'medium' | 'horizontal';

type CardProps = {
  variant?: CardVariant;
  href: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
};

export const Card = ({
  variant = 'medium',
  href,
  title,
  excerpt,
  image
}: CardProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        'group flex gap-md w-full',
        'p-md border border-plum-subtle rounded-card',
        'bg-plum-elevated no-underline',
        'shadow-card-rest hover:shadow-card-lift-peach focus-visible:shadow-card-lift-peach',
        'hover:-translate-y-1 focus-visible:-translate-y-1',
        'transition-[transform, box-shadow]',
        'ease-in-out-circ duration-300',
        {
          'flex-col min-w-70 max-w-full sm:max-w-160': variant === 'large',
          'flex-col min-w-55 max-w-full sm:max-w-95': variant === 'medium',
          'items-start min-w-80 max-w-full sm:max-w-130':
            variant === 'horizontal'
        }
      )}
    >
      <div
        className={classNames(
          'relative aspect-video overflow-hidden rounded-image bg-plum-overlay',
          { 'basis-[42%] shrink-0': variant === 'horizontal' }
        )}
      >
        <Image src={image.src} alt={image.alt} fill className='object-cover' />
      </div>
      <div className='flex flex-col gap-xs'>
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
