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
        'gap-14 md:gap-4',
        className
      )}
    >
      <div className='flex flex-col gap-1 w-fit'>
        <dt className='text-label text-tertiary tracking-[0.08em] font-normal'>
          Publié
        </dt>
        <dd className='font-mono text-[0.8125rem] text-primary m-0'>
          {formatLongDate(date)}
        </dd>
      </div>
      <div className='flex flex-col gap-1 w-fit'>
        <dt className='text-label text-tertiary tracking-[0.08em] font-normal'>
          Lecture
        </dt>
        <dd className='font-mono text-[0.8125rem] text-primary m-0'>
          {readingTime} minute{readingTime > 1 ? 's' : ''}
        </dd>
      </div>
    </dl>
  );
};
