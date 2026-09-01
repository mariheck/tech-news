import classNames from 'classnames';
import { LucideIcon } from 'lucide-react';
import type { Route } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';

type TextLinkProps = {
  href: Route;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export const TextLink = ({
  href,
  icon: Icon,
  iconPosition = 'left',
  children,
  external = false,
  className
}: TextLinkProps) => {
  const iconNode = Icon ? (
    <Icon aria-hidden='true' strokeWidth={1.7} size={12} />
  ) : null;

  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={classNames(
        'relative flex w-fit items-center gap-2',
        "before:absolute before:-inset-3.5 before:content-['']",
        'font-mono text-[0.75rem] tracking-wider',
        'text-secondary hover:text-primary focus-visible:text-primary',
        'transition-colors duration-200 ease-out-circ',
        className
      )}
    >
      {iconPosition === 'left' && iconNode}
      {children}
      {iconPosition === 'right' && iconNode}
    </Link>
  );
};
