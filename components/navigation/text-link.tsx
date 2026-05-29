import classNames from 'classnames';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

type TextLinkProps = {
  href: string;
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
        'relative flex gap-2 items-center',
        "before:absolute before:-inset-1 before:content-['']",
        'font-mono text-[0.75rem] tracking-wider',
        'text-secondary hover:text-primary focus-visible:text-primary',
        'transition-colors ease-out-circ duration-200',
        className
      )}
    >
      {iconPosition === 'left' && iconNode}
      {children}
      {iconPosition === 'right' && iconNode}
    </Link>
  );
};
