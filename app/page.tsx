'use client';

import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import { useEffect, useRef, useState } from 'react';
import { useMyContext } from '@/context/context';
import Footer from '@/components/print/footer';
import SideBar from '@/components/layout/SideBar';
import { codeString } from '@/lib/codeString';
import { Resizable } from 're-resizable';
import Loading from '@/components/ui/loading';

export default function Home() {
  const { state } = useMyContext();
  const [title, setTitle] = useState<string>('');
  const [code, setCode] = useState<string>(codeString);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const editorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    if (code) {
      setCode(code);
    }
  }, []);

  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      <link
        rel="stylesheet"
        href={state.fontStyle?.link}
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={state.font?.src} crossOrigin="anonymous" />
      <div className="w-[20%] p-2">
        <SideBar />
      </div>
      <main
        className="m-auto flex h-full w-4/6 flex-col items-center gap-4 pt-2"
        ref={mainRef}
      >
        {isLoading && state.isLoader === false ? (
          <Loading setLoading={setIsLoading} />
        ) : null}
        <div className="h-[75%] overflow-y-auto overflow-x-hidden">
          <Resizable
            enable={{ left: true, right: true }}
            minWidth={300}
            maxWidth={mainRef.current?.offsetWidth}
          >
            <div
              className={cn('overflow-hidden', `bg-${state.theme?.name} `)}
              style={{
                padding: `${state.padding}px`,
                background: state.theme?.background,
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
        <Footer editorRef={editorRef} title={title} />
      </main>
    </div>
  );
}
