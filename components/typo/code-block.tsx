'use client';

import classNames from 'classnames';
import { CopyIcon, SquareCheckBigIcon } from 'lucide-react';
import { useRef, useState, type ReactNode } from 'react';

type CodeBlockProps = {
  children: ReactNode;
};

export const CodeBlock = ({ children }: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (copied) return;
    const code = preRef.current?.textContent;
    if (!code || !navigator.clipboard) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const iconBase = '[grid-area:1/1] transition-[opacity,scale] duration-200';
  const iconShown = 'opacity-100 motion-safe:scale-100';
  const iconHidden = 'opacity-0 motion-safe:scale-50';

  return (
    <div className='relative group mb-6'>
      <pre
        ref={preRef}
        className={classNames(
          'bg-plum-overlay rounded-lg p-4',
          '[font-variant-ligatures:none]',
          '[&_code]:block [&_code]:bg-transparent [&_code]:p-0',
          '[&_code]:rounded-none',
          '[&_code]:whitespace-pre-wrap [&_code]:wrap-break-word'
        )}
      >
        {children}
      </pre>
      <button
        type='button'
        onClick={handleCopy}
        aria-label='Copier le code'
        className={classNames(
          'cursor-pointer',
          'absolute top-2 right-2 size-8',
          'grid place-items-center rounded-md text-primary',
          'bg-plum-subtle/60 hover:bg-plum-subtle focus-visible:bg-plum-subtle',
          'active:scale-95',
          'before:absolute before:-inset-1.5 before:content-[""]',
          'transition-[color,transform,opacity] ease-out-circ duration-200',
          {
            'opacity-60 hover:opacity-100 focus-visible:opacity-100': !copied
          }
        )}
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
      </button>
      <span role='status' aria-live='polite' className='sr-only'>
        {copied ? 'Copié' : ''}
      </span>
    </div>
  );
};
