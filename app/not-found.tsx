import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | tech.news',
  description: "Cette page n'existe pas."
};

const NotFound = () => {
  return (
    <div className='m-auto flex'>
      <h1 className='text-2xl text-primary font-medium leading-12 mr-5 pr-6 border-r border-r-plum-subtle'>
        404
      </h1>
      <h2 className='text-sm text-primary/80 font-normal leading-12 m-0'>
        Cette page n&apos;existe pas.
      </h2>
    </div>
  );
};

export default NotFound;
