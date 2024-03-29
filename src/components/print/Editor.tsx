'use client';

import { OsEnum } from '@/lib/enum';
import { cn } from '@/lib/utils';
import { useMyContext } from '@/context/context';
import flourite from 'flourite';
import hljs from 'highlight.js';
import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';

interface CodeEditorProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

const CodeEditor = (props: CodeEditorProps) => {
  const { title, setTitle, code, setCode } = props;
  const { state } = useMyContext();

  const inputWidth = `${(title.length + 1) * 8 - 4}px`;

  const [language, setLanguage] = useState<string>('');

  useEffect(() => {
    const { language } = flourite(code, { noUnknown: true });
    setLanguage(language);
  }, [code]);

  const handleChange = (value: string) => {
    setCode(value);
    const queryParams = new URLSearchParams({
      code: value,
    });
    history.replaceState(null, '', `?${queryParams}`);
  };

  return (
    <div
      className={cn(
        'flex flex-col border text-white',
        state.rounded?.value,
        state.darkMode
          ? state.theme?.name === 'transparent'
            ? 'bg-stone-900'
            : 'bg-black/70'
          : state.theme?.name === 'transparent'
            ? 'bg-white'
            : 'bg-white/70'
      )}
    >
      <header
        className={cn(
          'flex h-12 items-center px-2',
          state.darkMode
            ? state.theme?.name === 'transparent'
              ? ''
              : 'bg-black/40'
            : state.theme?.name === 'transparent'
              ? ''
              : 'bg-white/40',
          state.rounded?.value
        )}
      >
        {state.os === OsEnum.mac ? (
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        ) : null}
        <div
          className="ml-10 flex h-7 min-w-28 items-center rounded-full bg-slate-400/40 pl-2  "
          style={{ width: inputWidth }}
        >
          <input
            className={cn(
              'transition-width z-10 flex h-full w-full items-center border-none  bg-transparent pl-2 text-xs  text-gray-700 outline-none duration-300 ',
              state.darkMode
                ? 'text-white placeholder:text-white'
                : 'text-black placeholder:text-gray-700'
            )}
            placeholder="untitled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </header>
      <div
        className={cn(
          'h-full',
          state.darkMode
            ? 'brightness-110 '
            : ' text-gray-800 brightness-50 saturate-200 contrast-200 '
        )}
      >
        <Editor
          className="transition-all duration-500 ease-in-out"
          textareaClassName="focus:outline-none"
          value={code}
          onValueChange={(value) => handleChange(value)}
          highlight={(value) =>
            hljs.highlight(value, { language: language || 'typescript' }).value
          }
          padding={10}
          style={{
            fontFamily: state.font?.name,
            fontSize: state.fontSize?.px,
            fontWeight: state.fontWeight,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
