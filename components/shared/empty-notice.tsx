import type { ReactNode } from 'react';

type EmptyNoticeProps = {
  children: ReactNode;
};

export const EmptyNotice = ({ children }: EmptyNoticeProps) => (
  <p className='rounded-xl bg-primary/2 py-10 text-center font-mono text-sm text-primary/60'>
    {children}
  </p>
);
