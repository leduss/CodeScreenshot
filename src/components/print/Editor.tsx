'use client';

import { OsEnum } from '@/lib/enum';
import { cn } from '@/lib/utils';
import { useMyContext } from '@/context/context';
import flourite from 'flourite';
import hljs from 'highlight.js';
import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { codeString } from '@/lib/codeString';

interface CodeEditorProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const CodeEditor = (props: CodeEditorProps) => {
  const { title, setTitle } = props;
  const { fontSize, darkMode, rounded, os } = useMyContext();

  const inputWidth = `${(title.length + 1) * 8 - 4}px`;

  const [code, setCode] = useState<string>(codeString);
  const [language, setLanguage] = useState<string>('');

  useEffect(() => {
    const { language } = flourite(code, { noUnknown: true });
    setLanguage(language);
  }, [code]);

  return (
    <div
      className={cn(
        'flex flex-col border border-gray-600/40 text-white ',
        rounded?.value,
        darkMode ? 'bg-black/70 ' : 'bg-white/70 text-gray-950'
      )}
    >
      <header className="flex h-12 items-center px-2">
        {os === OsEnum.mac ? (
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
            className="transition-width z-10 flex h-full w-full items-center border-none  bg-transparent pl-2 text-xs  text-gray-700 outline-none duration-300 placeholder:text-gray-700"
            placeholder="untitled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </header>
      <div
        className={cn(
          'h-full',
          darkMode
            ? 'brightness-110 bg-black/30'
            : ' text-gray-800 brightness-50 saturate-200 contrast-200 bg-white/10'
        )}
      >
        <Editor
          className=""
          textareaClassName="focus:outline-none"
          value={code}
          onValueChange={(value) => setCode(value)}
          highlight={(value) =>
            hljs.highlight(value, { language: language || 'typescript' }).value
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: fontSize?.px,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
