'use client';

import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store/useStore';
import { SideBar } from '@/components/layout';
import { codeString } from '@/data';
import { Loading } from '@/components/ui';
import { useFontLoader } from '@/hooks';
import { EditorContent, EditorShell } from '@/components/editor';

export default function Capture() {
  const {
    fontStyle,
    font,
    isLoader,
    rounded,
    language,
    setLanguage,
  } = useStore();
  const editorText = '#e6e8ef';
  const [title, setTitle] = useState<string>('counter');
  const [code, setCode] = useState<string>(codeString);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const editorRef = useRef<HTMLDivElement>(null);

  // Load fonts dynamically
  useFontLoader(fontStyle?.link);
  useFontLoader(font?.src);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const codeParam = queryParams.get('code');
    if (codeParam) {
      const normalized = codeParam.replace(/\r\n/g, '\n').replace(/\n+$/g, '');
      setCode(normalized);
    }
  }, []);

  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);


  return (
    <div className="noise-bg  h-screen w-screen overflow-hidden bg-background p-4">
      <div className="relative z-10 flex size-full ">
        {isLoading && !isLoader && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            <Loading setLoading={setIsLoading} />
          </div>
        )}
        <SideBar editorRef={editorRef} editorTitle={title} />

        <main className="flex size-full min-h-0 flex-col items-center gap-6 px-6 py-8">
          <section className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden">
            <div
              ref={editorRef}
              className={`box-border h-full max-w-none ${rounded?.value ?? ''}`}
              style={{ width: '75%' }}
            >
              <EditorShell
                title={title}
                code={code}
                onTitleChange={setTitle}
                onLanguageChange={setLanguage}
                titleTextColor={editorText}
                language={language}
                roundedClass={rounded?.value}
              >
                <EditorContent value={code} onChange={setCode} />
              </EditorShell>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
