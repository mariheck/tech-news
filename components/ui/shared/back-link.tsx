import classNames from 'classnames';
import { MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';

type BackLinkProps = { href: string };

export const BackLink = ({ href }: BackLinkProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        'flex gap-2 items-center',
        'font-mono text-[0.75rem] tracking-wider',
        'text-secondary hover:text-primary focus-visible:text-primary',
        'transition-colors ease-out-circ duration-200'
      )}
    >
      <MoveLeftIcon aria-hidden='true' strokeWidth={1.7} size={12} /> Retour
    </Link>
  );
};
