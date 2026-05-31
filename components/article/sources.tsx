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
      <span className='text-label text-tertiary'>Sources</span>
      <ol className='flex flex-col gap-5 list-none'>
        {sources.map((source, index) => (
          <li key={source.url} className='max-w-full'>
            <a
              href={source.url}
              target='_blank'
              rel='noopener noreferrer'
              title={source.label}
              className='flex flex-col gap-1 w-fit group'
            >
              <span
                aria-hidden={true}
                className='font-mono text-[0.8125rem] leading-[1.4] tracking-[0.02em] text-(--accent-light)'
              >
                [{index + 1}]
              </span>
              <span
                className={classNames(
                  'text-sm text-primary',
                  'line-clamp-1 w-fit max-w-full wrap-break-word',
                  'group-hover:text-(--accent-light) group-focus-visible:text-(--accent-light)',
                  'transition-colors ease-out-circ duration-200'
                )}
              >
                {source.label}
              </span>
              <span
                aria-hidden={true}
                className='font-mono text-xs tracking-normal text-tertiary line-clamp-1 max-w-full break-all'
              >
                {source.url.replace(/^https?:\/\//, '')}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
