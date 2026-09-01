import { formatLongDate } from '@/utils';

export const LastUpdate = () => {
  const buildTime = new Date(process.env.BUILD_TIME ?? '');
  if (Number.isNaN(buildTime.getTime())) return null;

  return (
    <time
      dateTime={buildTime.toISOString()}
      className='font-mono text-xs text-secondary'
    >
      Dernière mise à jour{'\u202F'}: {formatLongDate(buildTime)}
    </time>
  );
};
