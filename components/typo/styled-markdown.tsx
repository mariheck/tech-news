import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type StyledMarkdownProps = {
  markdown: string;
};

export const StyledMarkdown = ({ markdown }: StyledMarkdownProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className='text-headline mb-8 text-primary text-balance'>
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className='text-[1.875rem] font-semibold leading-[1.2] tracking-[-0.014em] mt-15 mb-4.5 text-primary text-balance'>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className='text-title mt-8.75 mb-2.75 text-primary text-balance'>
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className='text-body leading-[1.7] mb-6 max-w-[65ch]'>
            {children}
          </p>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--accent-light) underline-offset-5 hover:underline focus-visible:underline hover:decoration-(--accent-light) focus-visible:decoration-(--accent-light)'
          >
            {children}
          </a>
        ),
        code: ({ children }) => (
          <code className='font-mono text-[0.88em] bg-plum-overlay rounded-sm px-1.25 py-0.5 text-primary'>
            {children}
          </code>
        ),
        blockquote: ({ children }) => (
          <blockquote className='border-l-2 border-(--accent) pl-5 my-8 italic text-secondary'>
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className='list-disc pl-5 my-4 text-body text-primary marker:text-tertiary'>
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className='list-decimal pl-5 my-4 text-body text-primary marker:text-tertiary'>
            {children}
          </ol>
        ),
        li: ({ children }) => <li className='my-2'>{children}</li>,
        strong: ({ children }) => (
          <strong className='font-semibold'>{children}</strong>
        ),
        em: ({ children }) => <em className='italic'>{children}</em>
      }}
    >
      {markdown}
    </Markdown>
  );
};
