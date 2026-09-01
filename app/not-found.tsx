import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | tech.news',
  description: "Cette page n'existe pas."
};

const NotFound = () => {
  return (
    <div className='m-auto flex'>
      <h1 className='mr-5 border-r border-r-plum-subtle pr-6 text-2xl leading-12 font-medium text-primary'>
        404
      </h1>
      <h2 className='m-0 text-sm leading-12 font-normal text-primary/80'>
        Cette page n&apos;existe pas.
      </h2>
    </div>
  );
};

export default NotFound;
