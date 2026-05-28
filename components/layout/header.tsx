import { TextLink } from '@/components/ui';
import { ArchiveIcon, NewspaperIcon } from 'lucide-react';
import { Brand } from './brand';

export const Header = () => {
  return (
    <header className='sticky top-0 z-40 h-16 border-b border-plum-subtle bg-plum-base/85 backdrop-blur-sm'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-6'>
        <Brand />
        <div className='flex gap-8'>
          <TextLink href='/' icon={NewspaperIcon}>
            Accueil
          </TextLink>
          <TextLink href='/archives' icon={ArchiveIcon}>
            Archives
          </TextLink>
        </div>
      </div>
    </header>
  );
};
