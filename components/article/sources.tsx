import type { Source } from '@/types';
import classNames from 'classnames';

type SourcesProps = {
  sources: Source[];
  className?: string;
};

export const Sources = ({ sources, className }: SourcesProps) => {
  if (sources.length === 0) return null;

  return (
    <div className={classNames('flex flex-col gap-4', className)}>
      <span className='text-label text-tertiary'>— Sources</span>
      <ol className='flex flex-col gap-5 list-none'>
        {sources.map((source, index) => (
          <li key={source.url} className='flex flex-col gap-1 w-fit max-w-full'>
            <span className='font-mono text-[0.8125rem] leading-[1.4] tracking-[0.02em] text-(--accent)'>
              [{index + 1}]
            </span>
            <a
              href={source.url}
              target='_blank'
              rel='noopener noreferrer'
              className={classNames(
                'text-sm text-primary',
                'hover:text-(--accent-light) focus-visible:text-(--accent-light)',
                'transition-colors ease-out-circ duration-200',
                'line-clamp-1 w-fit max-w-full wrap-break-word'
              )}
            >
              {source.label}
            </a>
            <span className='font-mono text-xs tracking-normal text-tertiary line-clamp-1 max-w-full break-all'>
              {source.url}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
