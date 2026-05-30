import { StyledMarkdown } from '@/components/typo';
import { loadPage } from '@/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site tech.news : éditeur, hébergeur et sources des contenus.',
  alternates: { canonical: '/mentions-legales' }
};

const LegalPage = async () => {
  const content = await loadPage('mentions-legales');

  return (
    <div className='mx-auto max-w-180'>
      <StyledMarkdown markdown={content} />
    </div>
  );
};

export default LegalPage;
