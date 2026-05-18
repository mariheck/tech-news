import { Brand } from './brand';

export const Header = () => {
  return (
    <header className='sticky top-0 z-40 h-16 border-b border-plum-subtle bg-plum-base/85 backdrop-blur-sm'>
      <div className='mx-auto flex h-full max-w-7xl items-center px-lg'>
        <Brand />
      </div>
    </header>
  );
};
