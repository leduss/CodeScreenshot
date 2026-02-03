'use client';

import { CodeEditor } from '@/components/editor';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store/useStore';
import { Footer, SideBar } from '@/components/layout';
import { codeString } from '@/data';
import { Resizable } from 're-resizable';
import { Loading } from '@/components/ui';
import { cn } from '@/utils';

export default function Home() {
  const { fontStyle, font, theme, padding, isLoader } = useStore();
  const [title, setTitle] = useState<string>('counter');
  const [code, setCode] = useState<string>(codeString);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const editorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const codeParam = queryParams.get('code');
    if (codeParam) {
      setCode(codeParam);
    }
  }, []);

  return (
    <div className="flex h-full w-full">
      {fontStyle?.link && (
        <link rel="stylesheet" href={fontStyle.link} crossOrigin="anonymous" />
      )}
      {font?.src && (
        <link rel="stylesheet" href={font.src} crossOrigin="anonymous" />
      )}
      <aside className="w-[250px] shrink-0 h-full overflow-y-auto border-r">
        <SideBar />
      </aside>
      <main
        className="m-auto flex h-full flex-col items-center w-full gap-4 pt-2"
        ref={mainRef}
      >
        {isLoading && !isLoader ? <Loading setLoading={setIsLoading} /> : null}
        <div
          className="h-[75%] overflow-y-auto overflow-x-auto"
          id="resizable-container"
        >
          <Resizable
            enable={{ left: true, right: true }}
            minWidth={300}
            maxWidth={1000}
            defaultSize={{
              width: Number(mainRef.current?.offsetWidth),
              height: '100%',
            }}
          >
            <div
              className={cn('overflow-visible', `bg-${theme?.name} `)}
              style={{
                padding: `${padding}px`,
                background: theme?.background,
              }}
              ref={editorRef}
            >
              <CodeEditor
                title={title}
                setTitle={setTitle}
                code={code}
                setCode={setCode}
              />
            </div>
          </Resizable>
        </div>
        <div className="flex items-center justify-center pb-2 shrink-0">
          <Footer editorRef={editorRef} title={title} />
        </div>
      </main>
    </div>
  );
}
