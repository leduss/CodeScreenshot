'use client';

import { CodeEditor } from '@/components/editor';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store/useStore';
import { Footer, SideBar } from '@/components/layout';
import { codeString } from '@/data';
import { Resizable } from 're-resizable';
import { Loading } from '@/components/ui';
import { useFontLoader } from '@/hooks';

export default function Home() {
  const { fontStyle, font, theme, padding, isLoader } = useStore();
  const [title, setTitle] = useState<string>('counter');
  const [code, setCode] = useState<string>(codeString);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const editorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  // Load fonts dynamically
  useFontLoader(fontStyle?.link);
  useFontLoader(font?.src);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const codeParam = queryParams.get('code');
    if (codeParam) {
      setCode(codeParam);
    }
  }, []);

  return (
    <div className="flex size-full">
        <aside className="h-full w-[250px] shrink-0 overflow-y-auto border-r">
          <SideBar />
        </aside>

        <main
          ref={mainRef}
          className="m-auto flex size-full flex-col items-center gap-4 pt-2"
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
  );
}
