'use client';

import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import { useEffect, useRef, useState } from 'react';
import { useMyContext } from '@/context/context';
import Footer from '@/components/print/footer';
import SideBar from '@/components/layout/SideBar';
import { SiteConfig } from '@/lib/site-config';
import { codeString } from '@/lib/codeString';

export default function Home() {
  const { state } = useMyContext();
  const [title, setTitle] = useState<string>('');
  const [code, setCode] = useState<string>(codeString);

  const editorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    if (code) {
      setCode(code);
    }
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      setWidth(mainRef.current.clientWidth);
      setTimeout(() => setIsLoading(false), 2000);
    }
  }, []);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setIsResizing(true);
    setStartX(event.clientX);
    setOffsetX(width);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      if (isResizing) {
        const newWidth = offsetX + (event.clientX - startX);
        const maxWidth = mainRef.current?.clientWidth || 0;
        if (newWidth >= 400 && newWidth <= maxWidth) {
          setWidth(newWidth);
        }
      }
    };

    const handleMouseUp = (): void => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, offsetX, startX]);

  return (
    <div className="relative flex h-full w-full overflow-hidden">
      <div className="w-[20%] p-2">
        <SideBar />
      </div>
      <main
        className="m-auto flex h-full w-4/6 flex-col items-center gap-4 "
        ref={mainRef}
      >
        <link
          rel="stylesheet"
          href={state.fontStyle?.link}
          crossOrigin="anonymous"
        />
        {isLoading ? (
          <div className="absolute left-1/2 top-1/2 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background">
            <div className="relative h-60 w-60 animate-spin rounded-full border-y-8 border-primary"></div>
            <p className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-primary">
              {SiteConfig.title}
            </p>
          </div>
        ) : (
          <div
            className="relative h-[75%] w-5/6 overflow-y-auto overflow-x-hidden  "
            style={{ width: `${width}px` }}
          >
            <div
              className={cn(' overflow-hidden', `bg-${state.theme?.name} `)}
              style={{
                padding: `${state.padding}px`,
                background: state.theme?.background,
              }}
              ref={editorRef}
            >
              <button
                className="absolute right-0 top-0 h-full w-2 cursor-col-resize"
                onMouseDown={handleMouseDown}
              ></button>
              <CodeEditor
                title={title}
                setTitle={setTitle}
                code={code}
                setCode={setCode}
              />
            </div>
          </div>
        )}
        <Footer editorRef={editorRef} title={title} loading={isLoading} />
      </main>
    </div>
  );
}
