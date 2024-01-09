'use client';

import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import '../dracula.css';
import { useRef } from 'react';
import { useMyContext } from '@/context/context';
import Footer from '@/components/print/footer';

export default function Home() {
  const { theme, padding, fontStyle } = useMyContext();

  const editorRef = useRef<HTMLDivElement>(null);

  return (
    <main className="m-auto flex h-full w-5/6 flex-col ">
      <link rel="stylesheet" href={fontStyle?.link} crossOrigin="anonymous" />
      <div className="h-5/6 overflow-auto">
        <div
          className={cn(' overflow-hidden', `bg-${theme?.background} `)}
          style={{ padding: `${padding}px`, background: theme?.background }}
          ref={editorRef}
        >
          <CodeEditor />
        </div>
      </div>
      <Footer editorRef={editorRef} />
    </main>
  );
}
