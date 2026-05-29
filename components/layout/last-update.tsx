import { formatLongDate } from '@/utils';

export const LastUpdate = () => {
  const buildTime = new Date(process.env.BUILD_TIME ?? '');
  if (Number.isNaN(buildTime.getTime())) return null;

  return (
    <time
      dateTime={buildTime.toISOString()}
      className='text-xs text-secondary font-mono'
    >
      Dernière mise à jour{'\u202F'}: {formatLongDate(buildTime)}
    </time>
  );
};
