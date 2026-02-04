'use client';

import { CodeEditor } from '@/components/editor';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store/useStore';
import { Footer, SideBar } from '@/components/layout';
import { codeString } from '@/data';
import { Resizable } from 're-resizable';
import { Loading } from '@/components/ui';
import Head from 'next/head';

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
    <>
      <Head>
        {fontStyle?.link && (
          <link
            rel="stylesheet"
            href={fontStyle.link}
            crossOrigin="anonymous"
          />
        )}
        {font?.src && (
          <link rel="stylesheet" href={font.src} crossOrigin="anonymous" />
        )}
      </Head>
      <div className="flex h-full w-full">
        <aside className="w-[250px] shrink-0 h-full overflow-y-auto border-r">
          <SideBar />
        </aside>

        <main
          ref={mainRef}
          className="m-auto flex h-full flex-col items-center w-full gap-4 pt-2"
        >
          {isLoading && !isLoader && <Loading setLoading={setIsLoading} />}

          <section className="h-[75%] overflow-y-auto overflow-x-auto">
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
                ref={editorRef}
                style={{
                  padding: `${padding}px`,
                  background: theme?.background,
                }}
              >
                <CodeEditor
                  title={title}
                  setTitle={setTitle}
                  code={code}
                  setCode={setCode}
                />
              </div>
            </Resizable>
          </section>

          <Footer editorRef={editorRef} title={title} />
        </main>
      </div>
    </>
  );
}
