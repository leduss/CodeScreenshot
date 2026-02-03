'use client';

import React from 'react';
import { cn } from '@/utils';
import { useStore } from '@/store/useStore';
import { backgroundOption } from '@/constants/background-options';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useTranslation } from '@/hooks/useTranslation';

const ThemeSelect = () => {
  const { theme, setTheme } = useStore();
  const { t: translations } = useTranslation();

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-2/5 text-sm">{translations.background}</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="m-0 w-3/5 p-1">
            <div
              style={{ background: theme?.background }}
              className="flex size-full items-center justify-center rounded text-lg"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-52 p-1">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="gradient" className="w-24">
                {translations.gradient}
              </TabsTrigger>
              <TabsTrigger value="color" className="w-24">
                {translations.color}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="gradient">
              <div className="flex flex-wrap justify-center gap-4">
                {backgroundOption
                  .filter((bg) => bg.gradient)
                  .map((bg, i) => (
                    <div
                      key={i}
                      className={cn('h-6 w-6 cursor-pointer rounded-full')}
                      style={{ background: bg.background }}
                      onClick={() => setTheme(bg.name)}
                      role="button"
                      aria-label={`Select gradient theme ${bg.name}`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setTheme(bg.name);
                        }
                      }}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="color">
              <div className="flex flex-wrap justify-center gap-4">
                {backgroundOption
                  .filter((bg) => !bg.gradient)
                  .map((bg, i) => (
                    <div
                      key={i}
                      className={cn('h-6 w-6 cursor-pointer rounded-full')}
                      style={{ background: bg.background }}
                      onClick={() => setTheme(bg.name)}
                      role="button"
                      aria-label={`Select color theme ${bg.name}`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setTheme(bg.name);
                        }
                      }}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ThemeSelect;
