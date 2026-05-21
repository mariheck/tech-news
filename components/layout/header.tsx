import classNames from 'classnames';
import { ArchiveIcon } from 'lucide-react';
import Link from 'next/link';
import { Brand } from './brand';

export const Header = () => {
  return (
    <header className='sticky top-0 z-40 h-16 border-b border-plum-subtle bg-plum-base/85 backdrop-blur-sm'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-6'>
        <Brand />
        <Link
          href='/archives'
          aria-label='Archives'
          className={classNames(
            'relative text-secondary p-2 rounded-lg',
            'hover:bg-primary/6 focus-visible:bg-primary/6',
            'hover:text-primary focus-visible:text-primary',
            'transition-colors',
            'ease-in-out-circ duration-200',
            "before:absolute before:-inset-1 before:content-['']"
          )}
        >
          <ArchiveIcon strokeWidth={1.7} size={20} />
        </Link>
      </div>
    </header>
  );
};
