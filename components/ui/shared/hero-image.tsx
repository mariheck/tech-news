import classNames from 'classnames';
import Image from 'next/image';

type HeroImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const HeroImage = ({ src, alt, className }: HeroImageProps) => {
  return (
    <div
      className={classNames(
        'relative aspect-video w-full overflow-hidden rounded-2xl bg-plum-overlay',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 900px) 100vw, 60vw'
        priority
        className='object-cover'
      />
      <span
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/5'
      />
    </div>
  );
};
