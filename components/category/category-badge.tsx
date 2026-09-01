import type { AccentName } from '@/types';
import { accentToCssVar } from '@/utils/accent-to-css-var';
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
}: CategoryBadgeProps) => {
  const style = { '--accent': accentToCssVar[accent] } as CSSProperties;

  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? 'page' : undefined}
      style={style}
      className={classNames(
        'text-label inline-flex w-fit items-center rounded-full border px-2 py-1.5',
        'relative',
        'no-underline transition-[color,background-color,border-color]',
        'duration-200 ease-out-expo',
        'before:absolute before:inset-x-0 before:-inset-y-3 before:content-[""]',
        {
          'border-[color-mix(in_oklab,var(--accent)_18%,transparent)] bg-[color-mix(in_oklab,var(--accent)_9%,transparent)] text-[color-mix(in_oklab,var(--accent)_85%,var(--color-primary))]':
            active,
          'border-plum-subtle bg-transparent text-secondary hover:text-primary':
            !active
        }
      )}
    >
      {label}
    </Link>
  );
};
