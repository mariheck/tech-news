import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type CardSize = 'sm' | 'md' | 'lg';

type CardDirection = 'vertical' | 'horizontal';

type CardProps = {
  size?: CardSize;
  direction?: CardDirection;
  href: string;
  title: string;
  excerpt?: string;
  image: { src: string; alt: string };
};

export const Card = ({
  size = 'md',
  direction = 'vertical',
  href,
  title,
  excerpt,
  image
}: CardProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        'group flex gap-md',
        'p-md border border-plum-subtle rounded-card',
        'bg-plum-elevated no-underline',
        'shadow-card-rest hover:shadow-card-lift-peach focus-visible:shadow-card-lift-peach',
        'hover:-translate-y-1 focus-visible:-translate-y-1',
        'transition-[transform, box-shadow]',
        'ease-in-out-circ duration-300',
        {
          'flex-col': direction === 'vertical',
          'items-start': direction === 'horizontal'
        }
      )}
    >
      <div
        className={classNames(
          'relative aspect-video overflow-hidden rounded-image bg-plum-overlay',
          { 'basis-[42%] shrink-0': direction === 'horizontal' }
        )}
      >
        <Image src={image.src} alt={image.alt} fill className='object-cover' />
      </div>
      <div className='flex flex-col gap-xs'>
        <h3
          className={classNames(
            'leading-[1.2] tracking-[-0.012em] font-semibold text-primary text-balance',
            {
              'text-[17px] ': size === 'sm',
              'text-xl ': size === 'md',
              'text-[clamp(1.5rem,2.2vw,1.875rem)] ': size === 'lg'
            }
          )}
        >
          {title}
        </h3>
        {excerpt && (
          <p className='text-base leading-[1.55] text-secondary line-clamp-2'>
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
};
