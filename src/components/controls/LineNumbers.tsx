'use client';

import React, { useState, useId } from 'react';
import { useStore } from '@/store/useStore';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { useTranslation } from '@/hooks/useTranslation';

const LineNumbers = () => {
  const {
    showLineNumbers,
    setShowLineNumbers,
    highlightedLines,
    toggleLineHighlight,
    setHighlightedLines,
  } = useStore();
  const { t } = useTranslation();
  const inputId = useId();
  const [lineInput, setLineInput] = useState('');

  const addLineHighlight = () => {
    const line = parseInt(lineInput, 10);
    if (!isNaN(line) && line > 0 && !highlightedLines.includes(line)) {
      toggleLineHighlight(line);
      setLineInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addLineHighlight();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm">{t.lineNumbers}</span>
        <Button
          variant={showLineNumbers ? 'default' : 'outline'}
          size="sm"
          onClick={() => setShowLineNumbers(!showLineNumbers)}
          aria-pressed={showLineNumbers}
        >
          {showLineNumbers ? 'On' : 'Off'}
        </Button>
      </div>

      <Separator />

      <fieldset className="flex flex-col gap-2 border-0 p-0 m-0">
        <label htmlFor={inputId} className="text-sm">
          {t.highlightLines}
        </label>
        <div className="flex gap-2">
          <input
            id={inputId}
            type="number"
            placeholder={t.linesHash}
            value={lineInput}
            onChange={(e) => setLineInput(e.target.value)}
            onKeyDown={handleKeyDown}
            min={1}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
          <Button size="sm" onClick={addLineHighlight}>
            {t.add}
          </Button>
        </div>

        {highlightedLines.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1 list-none p-0 m-0" aria-label={t.highlightLines}>
            {highlightedLines.map((line) => (
              <li
                key={line}
                className="flex items-center gap-1 rounded bg-primary/20 px-2 py-1 text-xs"
              >
                <span>#{line}</span>
                <button
                  type="button"
                  onClick={() => toggleLineHighlight(line)}
                  className="text-destructive hover:text-destructive/80"
                  aria-label={`Remove line ${line}`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        {highlightedLines.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setHighlightedLines([])}
            className="mt-1 text-xs"
          >
            {t.clearAll}
          </Button>
        )}
      </fieldset>
    </div>
  );
};

export default LineNumbers;
