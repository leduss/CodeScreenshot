'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { cn } from '@/lib/utils';
import { useMyContext } from 'app/context';
import { backgroundOption } from '@/lib/backgroundOption';

const ThemeSelect = () => {
  const { theme, updateTheme } = useMyContext();
  return (
    <div className="flex w-full h-10 items-center">
      <p className=" w-[40%] text-sm">Background</p>
      <Select
        value={theme ? theme.name : 'Selectionner un thème'}
        onValueChange={(value) => updateTheme(value)}
      >
        <SelectTrigger className="w-[60%] text-sm">
          <SelectValue placeholder="Selectionner un thème" />
        </SelectTrigger>
        <SelectContent className="dark">
          {backgroundOption.map((theme, i) => (
            <SelectItem key={i} value={theme.name}>
              <div className="flex gap-4 items-center">
                <div className={cn('h-4 w-4 rounded-full', theme.background)} />
                <span className="capitalize">{theme.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelect;
