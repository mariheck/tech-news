import classNames from 'classnames';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2
      className={classNames(
        'text-xs text-secondary',
        'font-mono font-bold',
        'uppercase tracking-widest',
        'flex items-center gap-3.5',
        "after:content-['']",
        'after:h-px after:bg-plum-subtle',
        'after:flex-1'
      )}
    >
      {children}
    </h2>
  );
};
