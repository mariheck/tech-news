import type { AccentName } from '@/types';
import { accentToCssVar } from '@/utils';
import classNames from 'classnames';
import Link from 'next/link';
import type { CSSProperties } from 'react';

type CategoryBadgeProps = {
  label: string;
  accent: AccentName;
  href: string;
  active: boolean;
};

export const CategoryBadge = ({
  label,
  accent,
  href,
  active
}: CategoryBadgeProps) => (
  <Link
    href={href}
    aria-current={active ? 'page' : undefined}
    style={{ '--accent': accentToCssVar[accent] } as CSSProperties}
    className={classNames(
      'relative inline-flex items-center text-label',
      'rounded-full px-2 py-1.5 border',
      'no-underline transition-[color,background-color,border-color]',
      'duration-200 ease-out-expo',
      'before:absolute before:-inset-y-2 before:inset-x-0 before:content-[""]',
      {
        'bg-[color-mix(in_oklab,var(--accent)_9%,transparent)] border-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[color-mix(in_oklab,var(--accent)_85%,var(--color-primary))]':
          active,
        'bg-transparent border-plum-subtle text-secondary hover:text-primary':
          !active
      }
    )}
  >
    {label}
  </Link>
);
