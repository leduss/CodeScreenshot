'use client';

import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import '../dracula.css';
import { useEffect, useRef, useState } from 'react';
import { useMyContext } from '@/context/context';
import Footer from '@/components/print/footer';
import { Resizable } from 're-resizable';

export default function Home() {
  const { theme, padding, fontStyle } = useMyContext();

  const editorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  const [maxWidth, setMaxWidth] = useState<number>();

  useEffect(() => {
    const mainWidth = mainRef.current?.clientWidth;
    const calcul = mainWidth ? mainWidth - padding * 2 : 0;
    setMaxWidth(calcul);
  }, [padding]);
  

  return (
    <main ref={mainRef} className="m-auto flex h-full w-5/6 flex-col ">
      <link rel="stylesheet" href={fontStyle?.link} crossOrigin="anonymous" />

      <div className="h-5/6 overflow-auto">
        <Resizable
          enable={{ left: true, right: true }}
          minWidth={padding * 2 + 400}
          maxWidth={maxWidth}
        >
          <div
            className={cn(' overflow-hidden', `bg-${theme?.background} `)}
            style={{ padding: `${padding}px`, background: theme?.background }}
            ref={editorRef}
          >
            <CodeEditor />
          </div>
        </Resizable>
      </div>
      <Footer editorRef={editorRef} />
    </main>
  );
}
