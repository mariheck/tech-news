import classNames from 'classnames';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
};

export const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  className
}: ButtonProps) => {
  const iconNode = Icon ? (
    <Icon aria-hidden='true' strokeWidth={1.7} size={12} />
  ) : null;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'cursor-pointer',
        'relative w-fit flex gap-2 items-center',
        "before:absolute before:-inset-3.5 before:content-['']",
        'font-mono text-[0.75rem] tracking-wider',
        'text-secondary hover:text-primary focus-visible:text-primary',
        'bg-plum-elevated py-1.5 px-3 rounded-lg',
        'hover:bg-plum-overlay focus-visible:bg-plum-overlay',
        'disabled:text-tertiary disabled:cursor-not-allowed',
        'disabled:hover:bg-plum-elevated disabled:focus-visible:bg-plum-elevated',
        'transition-colors ease-out-circ duration-200',
        className
      )}
    >
      {iconPosition === 'left' && iconNode}
      {children}
      {iconPosition === 'right' && iconNode}
    </button>
  );
};
