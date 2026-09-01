import classNames from 'classnames';

type HaloAccentProps = {
  className?: string;
};

export const HaloAccent = ({ className }: HaloAccentProps) => {
  return (
    <span
      aria-hidden='true'
      data-testid='maininfo-halo'
      className={classNames(
        'halo-background pointer-events-none absolute -z-10 h-105 opacity-85 blur-[50px]',
        className
      )}
    />
  );
};
