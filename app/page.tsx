'use client';

import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import { useEffect, useRef, useState } from 'react';
import { useMyContext } from '@/context/context';
import Footer from '@/components/print/footer';
import Resizable from '@/components/resizable/resizable';

export default function Home() {
  const { theme, padding, fontStyle } = useMyContext();
  const [title, setTitle] = useState<string>('');

  const editorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [mainWidth, setMainWidht] = useState<number>(0);

  useEffect(() => {
    if (mainRef.current) {
      setMainWidht(mainRef.current.clientWidth);
    }
  }, [mainRef]);

  return (
    <main
      className="m-auto flex h-full w-5/6 flex-col items-center gap-4 "
      ref={mainRef}
    >
      <link rel="stylesheet" href={fontStyle?.link} crossOrigin="anonymous" />
      <Resizable
        className="relative h-[75%] w-full overflow-y-auto overflow-x-hidden "
        minWidth={300}
        maxWidth={mainWidth}
      >
        <div
          className={cn(' overflow-hidden', `bg-${theme?.background} `)}
          style={{ padding: `${padding}px`, background: theme?.background }}
          ref={editorRef}
        >
          <CodeEditor title={title} setTitle={setTitle} />
        </div>
      </Resizable>

      <Footer editorRef={editorRef} title={title} />
    </main>
  );
}
