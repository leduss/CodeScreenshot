'use client';

import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useStore, CustomTheme } from '@/store/useStore';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const CustomThemeSelector = () => {
  const {
    customThemes,
    activeCustomTheme,
    removeCustomTheme,
    setActiveCustomTheme,
  } = useStore();

  const handleSelectTheme = (theme: CustomTheme) => {
    setActiveCustomTheme(theme);
  };

  const handleRemoveTheme = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeCustomTheme(id);
    toast.success('Thème supprimé avec succès!');
  };

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-2/5 text-sm">Thèmes personnalisés</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="m-0 w-3/5 p-1">
            <div
              className="flex size-full items-center justify-center rounded px-2 text-xs"
              style={{
                background: activeCustomTheme?.background || '#282c34',
                color: activeCustomTheme?.textColor || '#abb2bf',
              }}
            >
              {activeCustomTheme?.name || 'Sélectionner'}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-2">
          {customThemes.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground">
              Aucun thème personnalisé
            </p>
          ) : (
            <div className="flex max-h-64 flex-col gap-1 overflow-y-auto">
              {customThemes.map((theme) => (
                <button
                  key={theme.id}
                  className="group relative flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors"
                  style={{
                    background:
                      activeCustomTheme?.id === theme.id
                        ? 'var(--primary)'
                        : 'transparent',
                    color:
                      activeCustomTheme?.id === theme.id
                        ? 'var(--primary-foreground)'
                        : 'inherit',
                  }}
                  onClick={() => handleSelectTheme(theme)}
                >
                  <div
                    className="size-4 shrink-0 rounded"
                    style={{
                      background: theme.background,
                      border: '1px solid #ccc',
                    }}
                  />
                  <span className="flex-1">{theme.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="size-6 p-0 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={(e) => handleRemoveTheme(e, theme.id)}
                  >
                    <Trash2 className="size-3" />
                  </Button>
                </button>
              ))}
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CustomThemeSelector;
