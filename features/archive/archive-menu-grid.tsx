import type { CategorySlug } from '@/types';
import { formatMonth, getMonthHref } from '@/utils';
import classNames from 'classnames';
import Link from 'next/link';
import { MONTH_ABBREVIATIONS } from './constants';

type ArchiveMenuGridProps = {
  months: string[];
  current: string;
  category?: CategorySlug;
  onNavigate?: () => void;
};

const yearOf = (month: string) => month.slice(0, 4);
const positionOf = (month: string) => Number(month.slice(5)) - 1;

export const ArchiveMenuGrid = ({
  months,
  current,
  category,
  onNavigate
}: ArchiveMenuGridProps) => {
  const years = [...new Set(months.map(yearOf))];

  return years.map((year) => (
    <section key={year} className='mb-4 last:mb-0'>
      <h2 className='text-label mb-2 text-tertiary tabular-nums'>{year}</h2>
      <ul className='grid grid-cols-[repeat(6,auto)] justify-start gap-1 md:grid-cols-[repeat(12,auto)]'>
        {MONTH_ABBREVIATIONS.map((abbreviation, position) => {
          const month = months.find(
            (entry) => yearOf(entry) === year && positionOf(entry) === position
          );

          const active = month === current;

          return !month ? (
            <li key={abbreviation} aria-hidden='true'>
              <span className='text-label inline-flex w-fit items-center rounded-full border border-transparent px-2 py-1.5 text-plum-subtle'>
                {abbreviation}
              </span>
            </li>
          ) : (
            <li key={abbreviation}>
              <Link
                href={getMonthHref({ month, category })}
                onNavigate={onNavigate}
                aria-current={active ? 'page' : undefined}
                aria-label={formatMonth(month)}
                className={classNames(
                  'inline-flex w-fit items-center rounded-full border px-2 py-1.5',
                  'text-label no-underline',
                  'transition-[color,background-color,border-color]',
                  'duration-200 ease-out-circ',
                  'relative md:before:absolute md:before:inset-x-0 md:before:-inset-y-3 md:before:content-[""]',
                  {
                    'border-[color-mix(in_oklab,var(--chrome-accent)_18%,transparent)] bg-[color-mix(in_oklab,var(--chrome-accent)_9%,transparent)] text-[color-mix(in_oklab,var(--chrome-accent)_85%,var(--color-primary))]':
                      active,
                    'border-transparent text-secondary hover:text-primary':
                      !active
                  }
                )}
              >
                {abbreviation}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  ));
};
