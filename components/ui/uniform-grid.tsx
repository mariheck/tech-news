import type { ReactNode } from 'react';

type UniformGridProps = { children: ReactNode };

export const UniformGrid = ({ children }: UniformGridProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl'>
      {children}
    </div>
  );
};
