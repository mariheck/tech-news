'use client';

import { Button } from '@/components/navigation/button';
import classNames from 'classnames';
import { CopyIcon, SquareCheckBigIcon } from 'lucide-react';
import { useRef, useState, type ReactNode } from 'react';

type CodeBlockProps = {
  children: ReactNode;
  language?: string;
};

export const CodeBlock = ({ children, language }: CodeBlockProps) => {
  const codeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (copied) return;
    const code = codeRef.current?.textContent;
    if (!code || !navigator.clipboard) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const iconBase = '[grid-area:1/1] transition-[opacity,scale] duration-300';
  const iconShown = 'opacity-100 motion-safe:scale-100';
  const iconHidden = 'opacity-0 motion-safe:scale-50';

  return (
    <div className='group relative my-6'>
      <pre
        className={classNames(
          'rounded-lg bg-plum-overlay p-4',
          '[font-variant-ligatures:none]',
          '[&_code]:block [&_code]:bg-transparent [&_code]:p-0',
          '[&_code]:rounded-none',
          '[&_code]:wrap-break-word [&_code]:whitespace-pre-wrap'
        )}
      >
        {language && (
          <span
            data-code-language
            className={classNames(
              'mb-2 inline-block',
              'font-mono text-[0.625rem] tracking-wider text-tertiary',
              'select-none [font-variant-ligatures:none]'
            )}
          >
            {language}
          </span>
        )}
        <div ref={codeRef}>{children}</div>
      </pre>

      <Button
        variant='icon'
        onClick={handleCopy}
        aria-label='Copier le code'
        className='absolute top-2 right-2'
      >
        <CopyIcon
          aria-hidden='true'
          size={15}
          strokeWidth={1.7}
          className={classNames(iconBase, copied ? iconHidden : iconShown)}
        />
        <SquareCheckBigIcon
          aria-hidden='true'
          size={15}
          strokeWidth={1.7}
          className={classNames(iconBase, copied ? iconShown : iconHidden)}
        />
      </Button>
      <span role='status' aria-live='polite' className='sr-only'>
        {copied ? 'Copié' : ''}
      </span>
    </div>
  );
};
