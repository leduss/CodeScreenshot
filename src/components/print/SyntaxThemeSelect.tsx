'use client';

import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';
import { syntaxThemes } from '@/lib/syntaxThemes';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export default function SyntaxThemeSelect() {
  const { syntaxTheme, setSyntaxTheme } = useStore();

  const currentTheme =
    syntaxThemes.find((t) => t.css === syntaxTheme) || syntaxThemes[0];

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-[40%] text-sm">Syntax Theme</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="m-0 w-[60%] p-1 h-9">
            <div
              className={cn(
                'flex h-full w-full items-center justify-center rounded text-xs px-2',
                currentTheme?.dark ? 'text-white' : 'text-black'
              )}
              style={{
                background: currentTheme?.dark ? '#1e1e1e' : '#f8f8f8',
                border: '1px solid #ddd',
              }}
            >
              {currentTheme?.name}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-2">
          <div className="flex flex-col gap-1 max-h-64 overflow-y-auto">
            {syntaxThemes.map((theme) => (
              <button
                key={theme.css}
                className={cn(
                  'flex items-center gap-2 px-2 py-1.5 cursor-pointer rounded text-sm transition-colors text-left',
                  syntaxTheme === theme.css
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
                onClick={() => setSyntaxTheme(theme.css)}
              >
                <div
                  className="w-4 h-4 rounded shrink-0"
                  style={{
                    background: theme.dark ? '#1e1e1e' : '#f8f8f8',
                    border: '1px solid #ccc',
                  }}
                />
                <span className="flex-1">{theme.name}</span>
                {theme.dark && <span className="text-xs opacity-60">dark</span>}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
