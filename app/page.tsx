'use client';

import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import { useEffect, useRef, useState } from 'react';
import { useMyContext } from '@/context/context';
import Footer from '@/components/print/footer';
import SideBar from '@/components/layout/SideBar';
import { SiteConfig } from '@/lib/site-config';
import { codeString } from '@/lib/codeString';
import { Resizable } from 're-resizable';
import gsap from 'gsap';

export default function Home() {
  const { state } = useMyContext();
  const [title, setTitle] = useState<string>('');
  const [code, setCode] = useState<string>(codeString);

  const editorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    if (code) {
      setCode(code);
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });
    tl.to(loaderRef.current, {
      scale: 2,
      duration: 1.5,
    }).to(loaderRef.current, {
      translateY: 2000,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="relative flex h-full w-full overflow-hidden">
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
        {isLoading ? (
          <div
            ref={loaderRef}
            className="absolute left-0 top-0  z-20 flex h-screen  w-screen items-center justify-center bg-background"
          >
            <div className="relative h-60 w-60 animate-spin rounded-full border-y-8 border-primary " />
            <p
              id="line"
              className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-primary"
            >
              {SiteConfig.title}
            </p>
          </div>
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
