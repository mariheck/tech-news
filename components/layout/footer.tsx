import { TextLink } from '@/components/navigation';
import { MoveUpRightIcon } from 'lucide-react';
import { Brand } from './brand';
import { LastUpdate } from './last-update';

export const Footer = () => {
  const repoUrl = process.env.GITHUB_REPO_URL;

  return (
    <footer className='border-t border-plum-subtle py-6'>
      <div className='mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between gap-x-8 gap-y-4 px-6'>
        <div className='flex flex-col md:flex-row items-center gap-x-8 gap-y-4'>
          <Brand size='sm' />
          <LastUpdate />
        </div>
        <div className='flex items-center gap-8'>
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
        </div>
      </div>
    </footer>
  );
};
