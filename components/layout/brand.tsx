import Link from 'next/link';

export const Brand = () => {
  return (
    <Link
      href='/'
      className='group relative isolate inline-flex items-baseline gap-2 font-mono text-sm tracking-wider text-primary no-underline before:absolute before:-inset-y-3 before:-inset-x-1 before:content-[""]'
    >
      <span
        aria-hidden='true'
        className='pointer-events-none absolute -inset-y-4 -inset-x-6 -z-10 rounded-full bg-[radial-gradient(circle_at_right_center,var(--color-accent-peach),transparent_40%)] opacity-0 blur-md transition-opacity duration-750 ease-out-expo group-hover:opacity-40 group-focus-visible:opacity-40'
      />
      tech.news
      <span
        aria-hidden='true'
        className='size-2 rounded-full bg-accent-peach shadow-wordmark-dot-glow'
      />
    </Link>
  );
};
