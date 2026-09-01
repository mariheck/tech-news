import { formatLongDate } from '@/utils';
import classNames from 'classnames';

type MetaDataProps = {
  date: Date;
  readingTime: number;
  className?: string;
};

export const MetaData = ({ date, readingTime, className }: MetaDataProps) => {
  return (
    <dl
      className={classNames(
        'flex justify-end md:justify-normal',
        'text-right md:text-left',
        'md:grid md:grid-cols-2',
        'gap-6 md:gap-4',
        className
      )}
    >
      <div className='flex w-fit flex-col gap-1'>
        <dt className='text-label font-normal tracking-[0.08em] text-tertiary'>
          Publié
        </dt>
        <dd className='m-0 font-mono text-[0.8125rem] text-primary'>
          {formatLongDate(date)}
        </dd>
      </div>
      <div className='flex w-fit flex-col gap-1'>
        <dt className='text-label font-normal tracking-[0.08em] text-tertiary'>
          Lecture
        </dt>
        <dd className='m-0 font-mono text-[0.8125rem] text-primary'>
          {readingTime} minute{readingTime > 1 ? 's' : ''}
        </dd>
      </div>
    </dl>
  );
};
