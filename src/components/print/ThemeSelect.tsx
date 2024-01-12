'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useMyContext } from '@/context/context';
import { backgroundOption } from '@/lib/backgroundOption';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const ThemeSelect = () => {
  const { state, dispatch } = useMyContext();
  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-[40%] text-sm">Background</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="m-0 w-[60%] p-1">
            <div
              style={{ background: state.theme?.background }}
              className="flex h-full w-full items-center justify-center rounded text-lg"
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
              <div className="flex flex-wrap justify-center gap-4">
                {backgroundOption
                  .filter((theme) => theme.gradient)
                  .map((theme, i) => (
                    <div
                      key={i}
                      className={cn('h-6 w-6 rounded-full cursor-pointer')}
                      style={{ background: theme.background }}
                      onClick={() =>
                        dispatch({
                          type: 'SET_THEME',
                          payload: theme.name,
                        })
                      }
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="color">
              <div className="flex flex-wrap justify-center gap-4">
                {backgroundOption
                  .filter((theme) => !theme.gradient)
                  .map((theme, i) => (
                    <div
                      key={i}
                      className={cn('h-6 w-6 rounded-full cursor-pointer')}
                      style={{ background: theme.background }}
                      onClick={() =>
                        dispatch({
                          type: 'SET_THEME',
                          payload: theme.name,
                        })
                      }
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
