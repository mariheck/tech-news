import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  variant?: 'default';
  href: string;
  title: string;
  image: { src: string; alt: string };
};

export const Card = ({ href, title, image }: CardProps) => {
  return (
    <Link
      href={href}
      className={`
        group flex flex-col gap-md 
        p-md border border-plum-subtle rounded-card 
        bg-plum-elevated no-underline 
        shadow-card-rest hover:shadow-card-lift-peach focus-visible:shadow-card-lift-peach
        hover:-translate-y-1 focus-visible:-translate-y-1
        transition-[transform, box-shadow] 
        ease-in-out-circ duration-300
      `}
    >
      <div className='relative aspect-video overflow-hidden rounded-image bg-plum-overlay'>
        <Image src={image.src} alt={image.alt} fill className='object-cover' />
      </div>
      <h3 className='text-card-title text-primary text-balance'>{title}</h3>
    </Link>
  );
};
