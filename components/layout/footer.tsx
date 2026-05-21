import { Brand } from './brand';
import { LastUpdate } from './last-update';

export const Footer = () => {
  return (
    <footer className='border-t border-plum-subtle py-6'>
      <div className='mx-auto flex max-w-7xl items-center gap-8 px-6'>
        <Brand />
        <LastUpdate />
      </div>
    </footer>
  );
};
