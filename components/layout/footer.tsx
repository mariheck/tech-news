import { TextLink } from '@/components/navigation';
import type { Route } from 'next';
import { MoveUpRightIcon } from 'lucide-react';
import { Brand } from './brand';
import { LastUpdate } from './last-update';

export const Footer = () => {
  const repoUrl = process.env.GITHUB_REPO_URL as Route | undefined;

  return (
    <footer className='border-t border-plum-subtle py-6'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-x-8 gap-y-4 px-6 md:flex-row'>
        <div className='flex flex-col items-center gap-x-8 gap-y-4 md:flex-row'>
          <Brand size='sm' />
          <LastUpdate />
        </div>
        <nav aria-label='Pied de page' className='flex items-center gap-8'>
          {repoUrl && (
            <TextLink
              href={repoUrl}
              icon={MoveUpRightIcon}
              iconPosition='right'
              external
            >
              Code source
            </TextLink>
          )}
          <TextLink href='/mentions-legales'>Mentions légales</TextLink>
        </nav>
      </div>
    </footer>
  );
};
