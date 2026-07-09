'use client';

import { markArticleRead } from '@/storage';
import { useEffect } from 'react';

type MarkAsReadProps = {
  href: string;
};

export const MarkAsRead = ({ href }: MarkAsReadProps) => {
  useEffect(() => {
    markArticleRead(href);
  }, [href]);

  return null;
};
