import classNames from 'classnames';
import Link from 'next/link';

export const Brand = () => {
  return (
    <Link
      href='/'
      className={classNames(
        'group relative isolate inline-flex items-baseline gap-2 p-2 rounded-lg',
        'font-mono text-sm tracking-wider text-primary no-underline',
        'before:absolute before:-inset-y-3 before:-inset-x-1 before:content-[""]'
      )}
    >
      <span
        aria-hidden='true'
        className={classNames(
          'pointer-events-none absolute -z-10',
          '-inset-y-6 -inset-x-6 rounded-full',
          'bg-[radial-gradient(ellipse_at_right_center,var(--color-accent-peach),transparent_60%)]',
          'blur-md opacity-0',
          'group-hover:opacity-30 group-focus-visible:opacity-30',
          'transition-opacity duration-300 ease-in-out-circ'
        )}
      />
      tech.news
      <span
        aria-hidden='true'
        className='size-2 rounded-full bg-accent-peach shadow-wordmark-dot-glow'
      />
    </Link>
  );
};
