'use client';

import type { CategorySlug } from '@/types';
import { formatMonth } from '@/utils';
import classNames from 'classnames';
import { ChevronDownIcon } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { ArchiveMenuGrid } from './archive-menu-grid';

type ArchiveMenuProps = {
  months: string[];
  current: string;
  category?: CategorySlug;
};

export const ArchiveMenu = ({
  months,
  current,
  category
}: ArchiveMenuProps) => {
  const [open, setOpen] = useState(false);

  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    const onOutsideEvent = (event: Event) => {
      if (wrapperRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onOutsideEvent);
    document.addEventListener('focusin', onOutsideEvent);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onOutsideEvent);
      document.removeEventListener('focusin', onOutsideEvent);
    };
  }, [open]);

  if (!months.includes(current)) return null;

  return (
    <div ref={wrapperRef} className='relative w-fit'>
      <button
        ref={triggerRef}
        type='button'
        onClick={() => setOpen((prevState) => !prevState)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Mois affiché : ${formatMonth(current)}`}
        className={classNames(
          'relative flex cursor-pointer items-center gap-2',
          'rounded-full border border-plum-subtle px-2 py-1.5',
          'text-label text-secondary',
          'hover:text-primary focus-visible:text-primary',
          'transition-[color,background-color,border-color]',
          'duration-200 ease-out-circ',
          'before:absolute before:inset-x-0 before:-inset-y-3 before:content-[""]'
        )}
      >
        {formatMonth(current)}
        <ChevronDownIcon
          aria-hidden='true'
          size={12}
          strokeWidth={1.7}
          className={classNames(
            'text-current/50 transition-[rotate] duration-200 ease-out-circ',
            { 'rotate-180': open }
          )}
        />
      </button>

      <div
        id={panelId}
        inert={!open}
        className={classNames(
          'absolute top-full right-0 z-30 mt-3',
          'max-h-96 w-fit max-w-[calc(100vw-3rem)] overflow-y-auto',
          'origin-top-right',
          'rounded-[0.875rem] border border-plum-subtle',
          'bg-plum-base p-5 md:bg-plum-base/85 md:backdrop-blur-sm',
          'transition-[opacity,scale] duration-200 ease-out-expo',
          {
            'scale-100 opacity-100': open,
            'pointer-events-none scale-97 opacity-0': !open
          }
        )}
      >
        <ArchiveMenuGrid
          months={months}
          current={current}
          category={category}
          onNavigate={() => setOpen(false)}
        />
      </div>
    </div>
  );
};
