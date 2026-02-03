'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useStore } from '@/store/useStore';
import { fontStyleOptions } from '@/constants/font-style-options';

const FontStyleSelect = () => {
  const { fontStyle, setFontStyle } = useStore();

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-2/5 text-sm">Font color</p>
      <Select
        value={fontStyle?.name || 'Selectionner un thème'}
        onValueChange={(value) => setFontStyle(value)}
      >
        <SelectTrigger className="w-3/5 text-xs">
          <SelectValue placeholder="Selectionner un thème" />
        </SelectTrigger>
        <SelectContent className="dark">
          {fontStyleOptions.map((fs, i) => (
            <SelectItem key={i} value={fs.name}>
              <div className="flex items-center gap-4">
                <span className="capitalize">{fs.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontStyleSelect;
