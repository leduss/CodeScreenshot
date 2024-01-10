'use client';

import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import { useEffect, useRef, useState } from 'react';
import { useMyContext } from '@/context/context';
import Footer from '@/components/print/footer';

export default function Home() {
  const { theme, padding, fontStyle } = useMyContext();
  const [title, setTitle] = useState<string>('');

  const editorRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (mainRef.current) {
      setWidth(mainRef.current.clientWidth);
      setIsLoading(false);
    }
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
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
    <main
      className="m-auto flex h-full w-5/6 flex-col items-center gap-4 "
      ref={mainRef}
    >
      <link rel="stylesheet" href={fontStyle?.link} crossOrigin="anonymous" />
      {isLoading ? (
        <div className="flex h-[75%] items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-y-4 border-gray-400"></div>
        </div>
      ) : (
        <div
          className="relative h-[75%] overflow-y-auto overflow-x-hidden "
          style={{ width: `${width}px` }}
          onMouseDown={handleMouseDown}
        >
          <div
            className={cn(' overflow-hidden', `bg-${theme?.background} `)}
            style={{ padding: `${padding}px`, background: theme?.background }}
            ref={editorRef}
          >
            <CodeEditor title={title} setTitle={setTitle} />
          </div>
        </div>
      )}
      <Footer editorRef={editorRef} title={title} />
    </main>
  );
}
