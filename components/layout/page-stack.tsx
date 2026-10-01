import type { ReactNode } from 'react';

type PageStackProps = {
  children: ReactNode;
};

export const PageStack = ({ children }: PageStackProps) => {
  return <div className='flex w-full flex-col gap-8 md:gap-16'>{children}</div>;
};
