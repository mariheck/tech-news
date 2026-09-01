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
        <h1 className='mr-5 border-r border-r-plum-subtle pr-6 text-2xl leading-12 font-medium text-primary'>
          500
        </h1>
        <h2 className='m-0 text-sm leading-12 font-normal text-primary/80'>
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
