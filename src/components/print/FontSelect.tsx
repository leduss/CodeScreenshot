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
import { fonts } from '@/lib/dataOption';

const FontSelect = () => {
  const { font, setFont } = useStore();

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-[40%] text-sm">Font</p>
      <Select
        value={font?.name || 'Selectionner un thème'}
        onValueChange={(value) => setFont(value)}
      >
        <SelectTrigger className="w-[60%] text-xs">
          <SelectValue placeholder="Selectionner un thème" />
        </SelectTrigger>
        <SelectContent className="dark">
          {fonts.map((f, i) => (
            <SelectItem key={i} value={f.name}>
              <div className="flex items-center gap-4">
                <span className="capitalize">{f.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSelect;
