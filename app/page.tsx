'use client';

import { useMyContext } from './context';
import { cn } from '@/lib/utils';
import CodeEditor from '@/components/print/Editor';
import { Minus, Plus, Square } from 'lucide-react';
import { OsEnum } from '@/lib/enum';
import '../dracula.css';

export default function Home() {
  const { theme, padding, rounded, os, fontStyle } = useMyContext();

  return (
    <div
      className={cn(
        'min-h-20 w-[36rem] transition-all ease-in duration-500 ',
        theme?.background
      )}
      style={{ padding: `${padding}px` }}
    >
      <link rel="stylesheet" href={fontStyle?.link} crossOrigin="anonymous" />
      <div
        className={cn(
          'h-full w-full border border-gray-600/40',
          rounded?.value,
          theme?.name === 'White' || theme?.name === 'None'
            ? 'bg-white text-gray-800'
            : 'bg-black/80 text-white'
        )}
      >
        <div className="h-6 flex items-center relative">
          {os === OsEnum.mac ? (
            <div className="flex items-center gap-2 absolute top-1 left-1">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          ) : (
            <div className="flex items-center gap-2 absolute top-0 right-0">
              <div className="transfrom translate-y-1.5">
                <Minus color="black" />
              </div>
              <div className="">
                <Square color="black" size={17} />
              </div>
              <div className="">
                <Plus color="black" className="rotate-45" />
              </div>
            </div>
          )}
        </div>

        <CodeEditor />
      </div>
    </div>
  );
}
