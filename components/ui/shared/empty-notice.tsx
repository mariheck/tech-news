import type { ReactNode } from 'react';

type EmptyNoticeProps = {
  children: ReactNode;
};

export const EmptyNotice = ({ children }: EmptyNoticeProps) => (
  <p className='py-10 text-center font-mono text-sm text-primary/50 bg-primary/2 rounded-xl'>
    {children}
  </p>
);
