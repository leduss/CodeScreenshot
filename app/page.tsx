'use client';

import { useMyContext } from './context';
import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import { OsEnum } from '@/lib/enum';
import '../dracula.css';
import { useState } from 'react';
import { Icons } from '@/lib/svg';
import { Languages } from '@/lib/dataOption';

export default function Home() {
  const { theme, padding, rounded, os, fontStyle, darkMode } = useMyContext();
  const [inputValue, setInputValue] = useState('');

  const inputWidth = `${(inputValue.length + 1) * 8 - 4 }px`;
  return (
    <div
      className={cn(
        'm-10 h-96 w-[36rem] transition ease-in duration-500 ',
        `bg-${theme?.background} `
      )}
      style={{ padding: `${padding}px`, background: theme?.background }}
    >
      <link rel="stylesheet" href={fontStyle?.link} crossOrigin="anonymous" />
      <div
        className={cn(
          'h-full w-full border border-gray-600/40 text-white flex flex-col',
          rounded?.value,
          darkMode ? 'bg-black/70 ' : 'bg-white/70 text-gray-950'
        )}
      >
        <div className="flex h-12 items-center px-2">
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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
        <CodeEditor />
      </div>
    </div>
  );
}
