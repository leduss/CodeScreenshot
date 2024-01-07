'use client';

import { useMyContext } from './context';
import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import { OsEnum } from '@/lib/enum';
import '../dracula.css';

export default function Home() {
  const { theme, padding, rounded, os, fontStyle, darkMode } = useMyContext();

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
          'h-full w-full border border-gray-600/40',
          rounded?.value,
          darkMode ? 'bg-black/70 text-white' : 'bg-white/70 text-gray-950'
        )}
      >
        <div className="h-6 flex items-center relative">
          {os === OsEnum.mac ? (
            <div className="flex items-center gap-2 absolute top-1 left-1">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          ) : null}
        </div>
        <CodeEditor />
      </div>
    </div>
  );
}
