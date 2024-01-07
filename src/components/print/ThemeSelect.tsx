'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useMyContext } from 'app/context';
import { backgroundOption } from '@/lib/backgroundOption';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const ThemeSelect = () => {
  const { theme, updateTheme } = useMyContext();
  return (
    <div className="flex w-full h-10 items-center">
      <p className="w-[40%] text-sm">Background</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="w-[60%] m-0 p-1">
            <div
              style={{ background: theme?.background }}
              className="w-full h-full rounded flex items-center justify-center text-lg"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-52 p-1">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="gradient" className="w-24">
                Gradient
              </TabsTrigger>
              <TabsTrigger value="color" className="w-24">
                Color
              </TabsTrigger>
            </TabsList>
            <TabsContent value="gradient">
              <div className="flex flex-wrap gap-4 justify-center">
                {backgroundOption
                  .filter((theme) => theme.gradient)
                  .map((theme, i) => (
                    <div
                      key={i}
                      className={cn('h-6 w-6 rounded-full cursor-pointer')}
                      style={{ background: theme.background }}
                      onClick={() => updateTheme(theme.name)}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="color">
              <div className="flex flex-wrap gap-4 justify-center">
                {backgroundOption
                  .filter((theme) => !theme.gradient)
                  .map((theme, i) => (
                    <div
                      key={i}
                      className={cn('h-6 w-6 rounded-full cursor-pointer')}
                      style={{ background: theme.background }}
                      onClick={() => updateTheme(theme.name)}
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
