import classNames from 'classnames';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'solid' | 'icon';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  'aria-label'?: string;
  className?: string;
};

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'solid',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  'aria-label': ariaLabel,
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
      aria-label={ariaLabel}
      className={classNames(
        'cursor-pointer rounded-md',
        'bg-plum-subtle/60 hover:bg-plum-subtle focus-visible:bg-plum-subtle',
        'text-primary/60 hover:text-primary focus-visible:text-primary',
        'scale-100 motion-safe:active:scale-97',
        "before:absolute before:-inset-1.5 before:content-['']",
        'transition-[color,scale] ease-out-circ duration-200',
        'disabled:text-tertiary disabled:cursor-not-allowed',
        'disabled:hover:bg-plum-subtle/60 disabled:focus-visible:bg-plum-subtle/60',
        'disabled:active:scale-100',
        {
          'relative flex gap-2 w-fit items-center font-mono text-[0.75rem] tracking-wider py-1.5 px-3':
            variant === 'solid',
          'size-8 grid place-items-center': variant === 'icon'
        },
        className
      )}
    >
      {iconPosition === 'left' && iconNode}
      {children}
      {iconPosition === 'right' && iconNode}
    </button>
  );
};
