'use client';

import React, { useState, useId } from 'react';
import { useStore } from '@/store/useStore';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';
import { useTranslation } from '@/hooks/useTranslation';
import { ProBadge } from './ProBadge';

const LineNumbers = () => {
  const {
    showLineNumbers,
    setShowLineNumbers,
    highlightedLines,
    toggleLineHighlight,
    setHighlightedLines,
    showZebra,
    setShowZebra,
    showFoldGutter,
    setShowFoldGutter,
    showActiveLine,
    setShowActiveLine,
    showSelectionMatches,
    setShowSelectionMatches,
    showTrailingWhitespace,
    setShowTrailingWhitespace,
    showSearch,
    setShowSearch,
    isPro,
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
    <div className="flex flex-col gap-1">
      <label className="flex items-center justify-between text-sm">
        <span>
          {t.lineNumbers}
          {!isPro && <ProBadge />}
        </span>
        <Checkbox
          checked={showLineNumbers}
          onCheckedChange={(checked) => setShowLineNumbers(!!checked)}
          disabled={!isPro}
        />
      </label>

      <label className="flex items-center justify-between text-sm">
        <span>{t.zebraStripes}</span>
        <Checkbox
          checked={showZebra}
          onCheckedChange={(checked) => setShowZebra(!!checked)}
        />
      </label>

      <label className="flex items-center justify-between text-sm">
        <span>
          {t.foldGutter}
          {!isPro && <ProBadge />}
        </span>
        <Checkbox
          checked={showFoldGutter}
          onCheckedChange={(checked) => setShowFoldGutter(!!checked)}
          disabled={!isPro}
        />
      </label>

      <label className="flex items-center justify-between text-sm">
        <span>
          {t.activeLine}
          {!isPro && <ProBadge />}
        </span>
        <Checkbox
          checked={showActiveLine}
          onCheckedChange={(checked) => setShowActiveLine(!!checked)}
          disabled={!isPro}
        />
      </label>

      <label className="flex items-center justify-between text-sm">
        <span>{t.selectionMatches}</span>
        <Checkbox
          checked={showSelectionMatches}
          onCheckedChange={(checked) => setShowSelectionMatches(!!checked)}
        />
      </label>

      <label className="flex items-center justify-between text-sm">
        <span>{t.trailingWhitespace}</span>
        <Checkbox
          checked={showTrailingWhitespace}
          onCheckedChange={(checked) => setShowTrailingWhitespace(!!checked)}
        />
      </label>

      <label className="flex items-center justify-between text-sm">
        <span>
          {t.search}
          {!isPro && <ProBadge />}
        </span>
        <Checkbox
          checked={showSearch}
          onCheckedChange={(checked) => setShowSearch(!!checked)}
          disabled={!isPro}
        />
      </label>

      <Separator />

      <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
        <label htmlFor={inputId} className="text-sm">
          {t.highlightLines}
          {!isPro && <ProBadge />}
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
            disabled={!isPro}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button size="sm" onClick={addLineHighlight} disabled={!isPro}>
            {t.add}
          </Button>
        </div>

        {highlightedLines.length > 0 && (
          <ul
            className="m-0 mt-2 flex list-none flex-wrap gap-1 p-0"
            aria-label={t.highlightLines}
          >
            {highlightedLines.map((line) => (
              <li
                key={line}
                className="flex items-center gap-1 rounded bg-primary/20 px-2 py-1 text-xs"
              >
                <span>#{line}</span>
                <Button
                  variant="destructive"
                  size="icon"
                  className='size-5 flex items-center justify-center'
                  onClick={() => toggleLineHighlight(line)}
                  aria-label={t.removeLineAria.replace('{line}', line.toString())}
                  disabled={!isPro}
                >
                  ×
                </Button>
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
            disabled={!isPro}
          >
            {t.clearAll}
          </Button>
        )}
      </fieldset>
    </div>
  );
};

export default LineNumbers;
