import type { AccentName } from '@/types';
import { accentToCssVar } from '@/utils/accent-to-css-var';
import classNames from 'classnames';
import Link from 'next/link';
import type { CSSProperties } from 'react';

type CategoryBadgeProps = { label: string; accent: AccentName } & (
  | { href: string; active: boolean }
  | { href?: never; active?: never }
);

export const CategoryBadge = ({
  label,
  accent,
  href,
  active
}: CategoryBadgeProps) => {
  const style = { '--accent': accentToCssVar[accent] } as CSSProperties;

  const baseBadge =
    'text-label inline-flex items-center rounded-full px-2 py-1.5 border w-fit';
  const accentBadge =
    'bg-[color-mix(in_oklab,var(--accent)_9%,transparent)] border-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[color-mix(in_oklab,var(--accent)_85%,var(--color-primary))]';

  if (href === undefined) {
    return (
      <span style={style} className={classNames(baseBadge, accentBadge)}>
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? 'page' : undefined}
      style={style}
      className={classNames(
        baseBadge,
        'relative',
        'no-underline transition-[color,background-color,border-color]',
        'duration-200 ease-out-expo',
        'before:absolute before:-inset-y-3 before:inset-x-0 before:content-[""]',
        {
          [accentBadge]: active,
          'bg-transparent border-plum-subtle text-secondary hover:text-primary':
            !active
        }
      )}
    >
      {label}
    </Link>
  );
};
