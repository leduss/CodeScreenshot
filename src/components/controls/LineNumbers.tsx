'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { cn } from '@/utils';
import { useTranslation } from '@/hooks/useTranslation';

const LineNumbers = () => {
  const {
    showLineNumbers,
    setShowLineNumbers,
    highlightedLines,
    toggleLineHighlight,
    setHighlightedLines,
  } = useStore();
  const { t: translations } = useTranslation();

  const [lineInput, setLineInput] = React.useState<string>('');

  const addLineHighlight = () => {
    const line = parseInt(lineInput, 10);
    if (!isNaN(line) && line > 0 && !highlightedLines.includes(line)) {
      toggleLineHighlight(line);
      setLineInput('');
    }
  };

  const removeLineHighlight = (line: number) => {
    toggleLineHighlight(line);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm dark:text-white">{translations.lineNumbers}</p>
        <Button
          variant={showLineNumbers ? 'default' : 'outline'}
          size="sm"
          onClick={() => setShowLineNumbers(!showLineNumbers)}
        >
          {showLineNumbers ? 'On' : 'Off'}
        </Button>
      </div>

      <Separator />

      <div className="flex flex-col gap-2">
        <p className="text-sm dark:text-white">{translations.highlightLines}</p>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder={translations.linesHash}
            value={lineInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLineInput(e.target.value)
            }
            min={1}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
            )}
          />
          <Button size="sm" onClick={addLineHighlight}>
            {translations.add}
          </Button>
        </div>

        {highlightedLines.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {highlightedLines.map((line) => (
              <div
                key={line}
                className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded text-xs dark:text-white"
              >
                <span>#{line}</span>
                <button
                  onClick={() => removeLineHighlight(line)}
                  className="text-destructive hover:text-destructive/80"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {highlightedLines.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setHighlightedLines([])}
            className="mt-1 text-xs"
          >
            {translations.clearAll}
          </Button>
        )}
      </div>
    </div>
  );
};

export default LineNumbers;
