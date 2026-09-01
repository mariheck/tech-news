import { MoveUpRightIcon } from 'lucide-react';
import { isValidElement } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './code-block';

type StyledMarkdownProps = {
  markdown: string;
};

const extractCodeLanguage = (children: unknown): string | undefined => {
  if (!isValidElement<{ className?: string }>(children)) return undefined;
  return children.props.className?.match(/language-(\w+)/)?.[1];
};

export const StyledMarkdown = ({ markdown }: StyledMarkdownProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className='text-headline mb-8 text-balance text-primary'>
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className='mt-15 mb-4.5 text-[1.875rem] leading-[1.2] font-semibold tracking-[-0.014em] text-balance text-primary'>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className='text-title mt-8.75 mb-2.75 text-balance text-primary'>
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className='text-body mb-6 max-w-[65ch] leading-[1.7]'>
            {children}
          </p>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--accent-light) underline-offset-5 hover:underline hover:decoration-(--accent-light) focus-visible:underline focus-visible:decoration-(--accent-light)'
          >
            {children}
            <MoveUpRightIcon
              aria-hidden='true'
              strokeWidth={1.7}
              size={14}
              className='ml-0.5 inline-block translate-y-[-0.05em]'
            />
          </a>
        ),
        pre: ({ children }) => (
          <CodeBlock language={extractCodeLanguage(children)}>
            {children}
          </CodeBlock>
        ),
        code: ({ children }) => (
          <code className='inline-block rounded-sm bg-plum-overlay px-1.25 py-0.5 font-mono text-[0.88em] text-primary [font-variant-ligatures:none]'>
            {children}
          </code>
        ),
        blockquote: ({ children }) => (
          <blockquote className='my-8 border-l-2 border-(--accent) pl-5 text-secondary italic'>
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className='text-body my-4 list-disc pl-5 text-primary marker:text-tertiary'>
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className='text-body my-4 list-decimal pl-5 text-primary marker:text-tertiary'>
            {children}
          </ol>
        ),
        li: ({ children }) => <li className='my-2'>{children}</li>,
        table: ({ children }) => (
          <div className='my-8 overflow-x-auto'>
            <table className='text-body w-max min-w-full border-collapse'>
              {children}
            </table>
          </div>
        ),
        th: ({ children, style }) => (
          <th
            style={style}
            className='border-b border-plum-subtle px-4 py-2.5 text-left font-semibold text-primary'
          >
            {children}
          </th>
        ),
        td: ({ children, style }) => (
          <td
            style={style}
            className='border-b border-plum-subtle px-4 py-2.5 text-secondary'
          >
            {children}
          </td>
        ),
        strong: ({ children }) => (
          <strong className='font-semibold'>{children}</strong>
        ),
        em: ({ children }) => <em className='italic'>{children}</em>,
        hr: () => <hr className='my-15 text-(--accent-light)/25' />
      }}
    >
      {markdown}
    </Markdown>
  );
};
