import { Brand } from './brand';

export const Footer = () => {
  return (
    <footer className='border-t border-plum-subtle py-6'>
      <div className='mx-auto flex max-w-7xl items-center px-6'>
        <Brand />
      </div>
    </footer>
  );
};
