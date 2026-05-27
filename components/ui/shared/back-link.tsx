import { MoveLeftIcon } from 'lucide-react';

export const BackLink = () => {
  return (
    <span className='flex gap-2 items-center font-mono text-[0.75rem] tracking-wider text-secondary'>
      <MoveLeftIcon aria-hidden='true' strokeWidth={1.7} size={12} /> Retour
    </span>
  );
};
