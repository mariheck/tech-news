import { MoveLeftIcon } from 'lucide-react';
import { TextLink } from './text-link';

type BackLinkProps = {
  href: string;
  className?: string;
};

export const BackLink = ({ href, className }: BackLinkProps) => {
  return (
    <TextLink href={href} icon={MoveLeftIcon} className={className}>
      Retour
    </TextLink>
  );
};
