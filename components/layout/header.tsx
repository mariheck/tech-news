import { TextLink } from '@/components/navigation';
import { ArchiveIcon, NewspaperIcon } from 'lucide-react';
import { Brand } from './brand';
import Link from 'next/link';
import classNames from 'classnames';

const NAV_ITEMS = [
  { href: '/', label: 'Accueil', icon: NewspaperIcon },
  { href: '/archives', label: 'Archives', icon: ArchiveIcon }
] as const;

export const Header = () => {
  return (
    <header className='sticky top-0 z-40 h-16 border-b border-plum-subtle bg-plum-base md:bg-plum-base/85 md:backdrop-blur-sm'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-6'>
        <Brand />

        <nav
          aria-label='Navigation principale'
          className='hidden gap-8 md:flex'
        >
          {NAV_ITEMS.map(({ href, label, icon }) => (
            <TextLink key={href} href={href} icon={icon}>
              {label}
            </TextLink>
          ))}
        </nav>

        <nav
          aria-label='Navigation mobile'
          className='flex gap-8 pr-2 md:hidden'
        >
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              title={label}
              className={classNames(
                'text-secondary hover:text-primary focus-visible:text-primary',
                'transition-colors duration-200 ease-out-circ',
                "relative before:absolute before:-inset-2.5 before:content-['']"
              )}
            >
              <Icon strokeWidth={1} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
