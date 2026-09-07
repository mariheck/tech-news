import classNames from 'classnames';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import type { Route } from 'next';
import Link from 'next/link';

type Direction = 'previous' | 'next';

const directionToName: Record<Direction, string> = {
  previous: 'Page précédente',
  next: 'Page suivante'
};

type PaginationPrevNextProps<RouteType extends string> = {
  direction: Direction;
  href: Route<RouteType>;
  label: string;
  className?: string;
};

export const PaginationPrevNext = <RouteType extends string>({
  direction,
  href,
  label,
  className
}: PaginationPrevNextProps<RouteType>) => {
  const iconProps = { 'aria-hidden': true, size: 12, strokeWidth: 1.7 };

  return (
    <Link
      href={href}
      aria-label={`${directionToName[direction]}, ${label}`}
      className={classNames(
        'relative flex w-fit items-center gap-2 py-1 capitalize',
        'font-mono text-xs tracking-wider no-underline',
        'text-secondary hover:text-primary focus-visible:text-primary',
        'transition-colors duration-200 ease-out-circ',
        'before:absolute before:-inset-x-4 before:-inset-y-3 before:content-[""]',
        className
      )}
    >
      {direction === 'previous' && <ArrowLeftIcon {...iconProps} />}
      <span className='max-sm:hidden'>{label}</span>
      {direction === 'next' && <ArrowRightIcon {...iconProps} />}
    </Link>
  );
};
