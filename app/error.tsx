'use client';

import { Button } from '@/components/navigation/button';
import { RotateCcwIcon } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='m-auto flex flex-col items-center gap-12'>
      {/* metadata/generateMetadata are ignored on error boundaries (Client Components) */}
      <title>500 | tech.news</title>
      <div className='flex'>
        <h1 className='text-2xl text-primary font-medium leading-12 mr-5 pr-6 border-r border-r-plum-subtle'>
          500
        </h1>
        <h2 className='text-sm text-primary/80 font-normal leading-12 m-0'>
          Une erreur est survenue.
        </h2>
      </div>
      <Button onClick={reset} icon={RotateCcwIcon}>
        Réessayer
      </Button>
    </div>
  );
};

export default ErrorPage;
