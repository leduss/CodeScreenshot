'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
    isPro,
  } = useStore();
  const editorText = '#e6e8ef';
  const [title, setTitle] = useState<string>('counter');
  const [code, setCode] = useState<string>(codeString);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const editorRef = useRef<HTMLDivElement>(null);
  const layoutPreset = useStore((state) => state.layoutPreset);
  const setExportWidth = useStore((state) => state.setExportWidth);
  const setExportHeight = useStore((state) => state.setExportHeight);
  const setExportLockRatio = useStore((state) => state.setExportLockRatio);
  const [isCapturingExport, setIsCapturingExport] = useState(false);

  // Load fonts dynamically
  useFontLoader(fontStyle?.link);
  const effectiveFontSrc = isPro
    ? font?.src
    : 'https://db.onlinewebfonts.com/c/203eabac5dc6b58ce623b91fc47f34cc?family=Input';
  useFontLoader(effectiveFontSrc);

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

  const layoutSizes = useMemo(
    () => ({
      centered: { width: 1200, height: 800, lockRatio: true },
      full: { width: 1920, height: 1080, lockRatio: false },
      ratio: { width: 1600, height: 1200, lockRatio: true },
    }),
    []
  );

  useEffect(() => {
    const settings = layoutSizes[layoutPreset] ?? layoutSizes.centered;
    setExportWidth(settings.width);
    setExportHeight(settings.height);
    setExportLockRatio(settings.lockRatio);
  }, [layoutPreset, layoutSizes, setExportHeight, setExportLockRatio, setExportWidth]);


  return (
    <div className="noise-bg  h-screen w-screen overflow-hidden bg-background p-4">
      <div className="relative z-10 flex size-full ">
        {isLoading && !isLoader && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            <Loading setLoading={setIsLoading} />
          </div>
        )}
        <SideBar
          editorRef={editorRef}
          editorTitle={title}
          onExportCaptureChange={setIsCapturingExport}
        />


        <main className="flex size-full min-h-0 flex-col items-center gap-6 px-6 py-8">
          <section className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden">
          <div
            ref={editorRef}
            className={`box-border h-full max-w-none ${rounded?.value ?? ''}`}
            style={{
              width:
                layoutPreset === 'full'
                  ? '100%'
                  : layoutPreset === 'ratio'
                  ? '80%'
                  : '75%',
              aspectRatio: layoutPreset === 'ratio' ? '4 / 3' : undefined,
            }}
          >
              <EditorShell
                title={title}
                code={code}
                onTitleChange={setTitle}
                onLanguageChange={setLanguage}
                titleTextColor={editorText}
                language={language}
                roundedClass={rounded?.value}
                hideHeaderActionsDuringCapture={isCapturingExport}
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
