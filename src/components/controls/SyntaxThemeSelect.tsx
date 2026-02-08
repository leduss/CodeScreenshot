'use client';

import { cn } from '@/utils';
import { useStore } from '@/store/useStore';
import { syntaxThemes } from '@/constants/syntax-themes/themes';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect } from 'react';

export default function SyntaxThemeSelect() {
  const { syntaxTheme, setSyntaxTheme, isPro } = useStore();
  const { t: translations } = useTranslation();

  const allowedThemes = isPro
    ? syntaxThemes
    : syntaxThemes.filter((t) =>
        ['console-dark', 'console-light', 'dracula'].includes(t.css)
      );

  const currentTheme =
    syntaxThemes.find((t) => t.css === syntaxTheme) ||
    allowedThemes[0] ||
    syntaxThemes[0];

  useEffect(() => {
    if (!isPro && currentTheme && !allowedThemes.includes(currentTheme)) {
      setSyntaxTheme(allowedThemes[0]?.css ?? 'console-dark');
    }
  }, [isPro, currentTheme, setSyntaxTheme, allowedThemes]);

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-2/5 text-sm">{translations.syntaxTheme}</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="hero"  className="m-0 h-7 w-3/5 p-1">
            <div
              className={cn(
                'flex h-full w-full items-center justify-center rounded text-xs px-2',
                currentTheme?.dark ? 'text-white' : 'text-black'
              )}
            >
              {currentTheme?.name}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-2">
          <div className="flex max-h-64 flex-col gap-1 overflow-y-auto">
            {syntaxThemes.map((theme) => {
              const isLocked =
                !isPro &&
                !allowedThemes.some((allowed) => allowed.css === theme.css);
              return (
              <button
                key={theme.css}
                className={cn(
                  'flex items-center gap-2 px-2 py-1.5 cursor-pointer rounded text-sm transition-colors text-left',
                  syntaxTheme === theme.css
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted',
                  isLocked && 'opacity-50 cursor-not-allowed'
                )}
                onClick={() => {
                  if (!isLocked) setSyntaxTheme(theme.css);
                }}
                disabled={isLocked}
              >
                <div
                  className="size-4 shrink-0 rounded"
                  style={{
                    background: theme.dark ? '#1e1e1e' : '#f8f8f8',
                    border: '1px solid #ccc',
                  }}
                />
                <span className="flex-1">{theme.name}</span>
                {isLocked && (
                  <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    Pro
                  </span>
                )}
              </button>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
