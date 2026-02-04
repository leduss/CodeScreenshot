'use client';

import { OsEnum } from '@/constants';
import { cn } from '@/utils';
import { useStore } from '@/store/useStore';
import flourite from 'flourite';
import hljs from 'highlight.js';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Editor from 'react-simple-code-editor';
import SyntaxThemeLoader from './SyntaxThemeLoader';
import SyntaxThemeColors from './SyntaxThemeColors';
import { syntaxThemesData, type SyntaxThemeData } from '@/constants/syntax-themes/data';
import { getLanguageIcon, getLanguageExtension } from '@/utils/language-icons';

interface CodeEditorProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

const CodeEditor = (props: CodeEditorProps) => {
  const { title, setTitle, code, setCode } = props;
  const {
    rounded,
    theme,
    os,
    font,
    fontSize,
    fontWeight,
    showLineNumbers,
    highlightedLines,
    syntaxTheme,
  } = useStore();

  const currentSyntaxTheme: SyntaxThemeData =
    syntaxThemesData.find((t) => t.css === syntaxTheme) || syntaxThemesData[4]!;

  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [visibleLineCount, setVisibleLineCount] = useState(1);
  const [language, setLanguage] = useState<string>('typescript');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const { language: detectedLanguage } = flourite(code, { noUnknown: true });
    let finalLanguage = detectedLanguage || 'typescript';

    // Check for TypeScript-specific patterns (higher priority than JSX detection)
    const hasTypeScriptPattern =
      code.includes('interface') ||
      code.includes(' type ') ||
      code.includes(': Type') ||
      code.includes(': {') ||
      code.includes(' enum') ||
      code.includes('import type') ||
      code.includes('export type') ||
      code.includes(': string') ||
      code.includes(': number') ||
      code.includes(': boolean') ||
      code.includes(': any') ||
      code.includes(': void') ||
      code.includes(': unknown') ||
      code.includes(': never');

    // Check for JSX/TSX syntax in the code
    // JSX patterns: <>...</>, <Component/>, onClick, onSubmit, etc.
    const hasJSXPattern =
      code.includes('<>') ||
      code.includes('</') ||
      code.includes('/>') ||
      code.includes('onClick=') ||
      code.includes('onSubmit=') ||
      code.includes('onChange=');

    if (hasJSXPattern) {
      // Use lowercase for comparison (flourite may return 'Javascript' with capital J)
      const lowerLanguage = finalLanguage.toLowerCase();

      // Check for TypeScript first (higher priority)
      if (
        hasTypeScriptPattern ||
        lowerLanguage === 'typescript' ||
        lowerLanguage === 'ts'
      ) {
        finalLanguage = 'tsx'; // highlight.js uses 'tsx' not 'typescriptreact'
      } else if (lowerLanguage === 'javascript' || lowerLanguage === 'js') {
        finalLanguage = 'jsx';
      }
    }

    setLanguage(finalLanguage);
  }, [code]);

  // Compute the full filename with extension
  const getFullFilename = () => {
    const extension = getLanguageExtension(language);

    // If user is editing, return current title as-is
    if (isEditing) {
      return title;
    }

    // If title doesn't have an extension yet, add it
    if (!title.includes('.') || title.endsWith(' ')) {
      return (title + extension).trim();
    }

    // Title has an extension - check if it's a known extension to replace
    const parts = title.split('.');
    const ext = parts.pop();
    const base = parts.join('.');

    // Check if the extension is a known extension (should be replaced)
    const knownExtensions = [
      'ts',
      'tsx',
      'js',
      'jsx',
      'py',
      'rs',
      'go',
      'java',
      'cpp',
      'c',
      'rb',
      'php',
      'swift',
      'kt',
      'html',
      'css',
    ];

    if (ext && knownExtensions.includes(ext.toLowerCase())) {
      // Replace the extension with the current language's extension
      return base + extension;
    }

    // Unknown extension, add the current language's extension
    return title + extension;
  };

  const handleChange = (value: string) => {
    setCode(value);
    const queryParams = new URLSearchParams({
      code: value,
    });
    history.replaceState(null, '', `?${queryParams}`);
  };

  // Calculer le nombre de lignes visuelles bas� sur la hauteur
  const calculateVisibleLines = useCallback(() => {
    if (!textareaRef.current || !fontSize?.px) return;

    const textarea = textareaRef.current;
    const lineHeight = fontSize.px + 4;
    const scrollHeight = textarea.scrollHeight;

    const lines = Math.ceil(scrollHeight / lineHeight);
    setVisibleLineCount(Math.max(lines, code.split('\n').length));
  }, [code, fontSize]);

  // Trouver le textarea et mesurer les lignes
  useEffect(() => {
    if (!containerRef.current) return;

    const findAndMeasureTextarea = () => {
      const textarea = containerRef.current?.querySelector('textarea');
      if (textarea && textarea !== textareaRef.current) {
        textareaRef.current = textarea;

        calculateVisibleLines();

        const syncScroll = () => {
          if (lineNumbersRef.current) {
            lineNumbersRef.current.scrollTop = textarea.scrollTop;
          }
        };

        textarea.addEventListener('scroll', syncScroll, { passive: true });

        const resizeObserver = new ResizeObserver(() => {
          calculateVisibleLines();
        });

        resizeObserver.observe(textarea);

        return () => {
          textarea.removeEventListener('scroll', syncScroll);
          resizeObserver.disconnect();
        };
      }
    };

    findAndMeasureTextarea();
    const observer = new MutationObserver(findAndMeasureTextarea);
    observer.observe(containerRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [calculateVisibleLines]);

  const lines = code.split('\n');
  const lineCount = lines.length;
  const lineHeight = (fontSize?.px || 14) + 4;

  // Couleurs dynamiques basées sur le thème de syntaxe
  const bgColor = currentSyntaxTheme?.bg || '#282a36';
  const headerBgColor = currentSyntaxTheme?.headerBg || '#21222c';
  const textColor = currentSyntaxTheme?.textColor || '#f8f8f2';
  const placeholderColor = currentSyntaxTheme?.placeholderColor || '#f8f8f280';
  const lineNumbersBgColor = currentSyntaxTheme?.lineNumbersBg || '#21222c';
  const lineNumbersTextColor = currentSyntaxTheme?.lineNumbersText || '#6272a4';
  const highlightBgColor = currentSyntaxTheme?.dark
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.08)';

  return (
    <article
      className={cn('flex flex-col border h-full', rounded?.value)}
      style={{
        backgroundColor: theme?.name === 'transparent' ? undefined : bgColor,
        color: textColor,
      }}
    >
      <SyntaxThemeLoader />
      <SyntaxThemeColors />

      <header
        className={cn('flex h-10 items-center px-2 shrink-0', rounded?.value)}
        style={{
          backgroundColor:
            theme?.name === 'transparent' ? undefined : headerBgColor,
        }}
      >
        {os === OsEnum.mac && (
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-3 rounded-full bg-red-500" />
            <span className="size-3 rounded-full bg-yellow-500" />
            <span className="size-3 rounded-full bg-green-500" />
          </div>
        )}
          <div className="ml-10 inline-flex h-10 items-center gap-2 bg-white/10 backdrop-blur-sm px-3 border-t border-violet-500 w-auto max-w-max">
            <div className="flex items-center justify-center w-5 h-5 shrink-0">
              <span style={{ color: textColor }}>
                {getLanguageIcon(language)}
              </span>
            </div>
            <input
              className="bg-transparent h-full text-sm outline-none text-inherit placeholder:text-inherit/50 border-none w-auto min-w-[100px]"
              style={{ color: textColor }}
              placeholder="nom fichier"
              value={getFullFilename()}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
            />
          </div>
        </header>
        <div
          className="flex flex-1 overflow-hidden"
          role="region"
          aria-label="Code editor"
          style={{ color: textColor }}
        >
          {showLineNumbers && (
            <div
              ref={lineNumbersRef}
              className={cn(
                'flex flex-col py-2 pl-2 pr-2 text-xs select-none border-r overflow-hidden text-inherit'
              )}
              style={{
                fontFamily: font?.name,
                fontSize: fontSize?.px,
                lineHeight: `${lineHeight}px`,
                minWidth: '2.5rem',
                height: '100%',
                backgroundColor: lineNumbersBgColor,
                color: lineNumbersTextColor,
              }}
              aria-hidden="true"
            >
              {Array.from(
                { length: Math.max(visibleLineCount, 1) },
                (_, i) => i + 1
              ).map((lineNum) => (
                <div
                  key={lineNum}
                  className={cn('relative px-1 text-right')}
                  style={{
                    backgroundColor: highlightedLines.includes(lineNum)
                      ? highlightBgColor
                      : undefined,
                  }}
                >
                  {lineNum}
                </div>
              ))}
            </div>
          )}
          <div
            ref={containerRef}
            className="editor-container flex-1 h-full relative"
          >
            <Editor
              className="transition-all duration-500 ease-in-out h-full"
              textareaClassName="focus:outline-none h-full"
              value={code}
              onValueChange={(value) => handleChange(value)}
              highlight={(value) =>
                hljs.highlight(value, { language: language || 'typescript' })
                  .value
              }
              padding={10}
              style={{
                fontFamily: font?.name,
                fontSize: fontSize?.px,
                fontWeight: fontWeight,
                lineHeight: `${lineHeight}px`,
                height: '100%',
                minHeight: '100%',
              }}
            />
          </div>
        </div>
      </article>
  );
};

export default CodeEditor;
