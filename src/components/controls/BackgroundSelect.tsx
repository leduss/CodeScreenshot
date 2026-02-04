'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { backgroundOption } from '@/constants/background-options';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useTranslation } from '@/hooks/useTranslation';
import type { Background } from '@/types';

interface ColorSwatchProps {
  bg: Background;
  onSelect: (name: string) => void;
  type: 'gradient' | 'color';
}

const ColorSwatch = ({ bg, onSelect, type }: ColorSwatchProps) => (
  <button
    type="button"
    className="h-6 w-6 cursor-pointer rounded-full border-0 p-0"
    style={{ background: bg.background }}
    onClick={() => onSelect(bg.name)}
    aria-label={`Select ${type} ${bg.name}`}
  />
);

const BackgroundSelect = () => {
  const { theme, setTheme } = useStore();
  const { t } = useTranslation();

  const gradients = backgroundOption.filter((bg) => bg.gradient);
  const colors = backgroundOption.filter((bg) => !bg.gradient);

  return (
    <div className="flex h-9 w-full items-center">
      <span className="w-2/5 text-sm">{t.background}</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="m-0 w-3/5 p-1">
            <span
              style={{ background: theme?.background }}
              className="flex size-full items-center justify-center rounded"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-52 p-1">
          <Tabs defaultValue="gradient" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="gradient" className="w-24">
                {t.gradient}
              </TabsTrigger>
              <TabsTrigger value="color" className="w-24">
                {t.color}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="gradient">
              <div className="flex flex-wrap justify-center gap-4" role="group" aria-label={t.gradient}>
                {gradients.map((bg) => (
                  <ColorSwatch key={bg.name} bg={bg} onSelect={setTheme} type="gradient" />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="color">
              <div className="flex flex-wrap justify-center gap-4" role="group" aria-label={t.color}>
                {colors.map((bg) => (
                  <ColorSwatch key={bg.name} bg={bg} onSelect={setTheme} type="color" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BackgroundSelect;
