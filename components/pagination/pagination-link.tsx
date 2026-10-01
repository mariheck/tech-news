import classNames from 'classnames';
import type { Route } from 'next';
import Link from 'next/link';

type PaginationLinkProps<RouteType extends string> = {
  page: number;
  label: string;
  href: Route<RouteType>;
  isSelected: boolean;
};

export const PaginationLink = <RouteType extends string>({
  page,
  label,
  href,
  isSelected
}: PaginationLinkProps<RouteType>) => (
  <Link
    href={href}
    aria-current={isSelected ? 'page' : undefined}
    aria-label={`Page ${page}, ${label}`}
    className={classNames(
      'relative inline-flex size-8 items-center justify-center',
      'rounded-full border no-underline',
      'font-mono text-xs tracking-wider tabular-nums',
      'transition-[color,background-color,border-color]',
      'duration-200 ease-out-circ',
      'before:absolute before:inset-x-0 before:-inset-y-2 before:content-[""]',
      {
        'border-[color-mix(in_oklab,var(--chrome-accent)_18%,transparent)] bg-[color-mix(in_oklab,var(--chrome-accent)_9%,transparent)] text-[color-mix(in_oklab,var(--chrome-accent)_85%,var(--color-primary))]':
          isSelected,
        'border-transparent text-secondary hover:text-primary': !isSelected
      }
    )}
  >
    {page}
  </Link>
);
