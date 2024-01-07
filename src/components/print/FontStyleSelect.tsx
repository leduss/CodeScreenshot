'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useMyContext } from 'app/context';
import { fontStyleOptions } from '@/lib/fontStyleOption';

const FontStyleSelect = () => {
  const { fontStyle, updateFontStyle } = useMyContext();
  return (
    <div className="flex w-full h-10 items-center">
      <p className="w-[40%] text-sm">Font color</p>
      <Select
        value={fontStyle ? fontStyle.name : 'Selectionner un thème'}
        onValueChange={(value) => updateFontStyle(value)}
      >
        <SelectTrigger className="w-[60%] text-sm">
          <SelectValue placeholder="Selectionner un thème" />
        </SelectTrigger>
        <SelectContent className="dark">
          {fontStyleOptions.map((fontStyle, i) => (
            <SelectItem key={i} value={fontStyle.name}>
              <div className="flex gap-4 items-center">
                <span className="capitalize">{fontStyle.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontStyleSelect;
