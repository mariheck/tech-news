'use client';

import { useIsArticleRead } from '@/hooks';
import { CheckIcon } from 'lucide-react';

type ReadIndicatorProps = {
  href: string;
};

export const ReadIndicator = ({ href }: ReadIndicatorProps) => {
  const isRead = useIsArticleRead(href);

  if (!isRead) return null;

  return (
    <span className='inline-flex items-center gap-1 text-label text-[0.6rem] text-tertiary'>
      Vu
      <CheckIcon aria-hidden='true' size={10} strokeWidth={1.7} />
    </span>
  );
};
