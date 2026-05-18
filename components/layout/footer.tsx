import { Brand } from './brand';

export const Footer = () => {
  return (
    <footer className='border-t border-plum-subtle py-lg'>
      <div className='mx-auto flex max-w-7xl items-center px-lg'>
        <Brand />
      </div>
    </footer>
  );
};
