'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useMyContext } from '@/context/context';
import { fontStyleOptions } from '@/lib/fontStyleOption';
import { fonts } from '@/lib/dataOption';

const FontSelect = () => {
  const { state, dispatch } = useMyContext();
  return (
    <div className="flex h-10 w-full items-center">
      <p className="w-[40%] text-sm">Font</p>
      <Select
        value={state.font ? state.font.name : 'Selectionner un thème'}
        onValueChange={(value) =>
          dispatch({ type: 'SET_FONT', payload: value })
        }
      >
        <SelectTrigger className="w-[60%] text-xs">
          <SelectValue placeholder="Selectionner un thème" />
        </SelectTrigger>
        <SelectContent className="dark">
          {fonts.map((font, i) => (
            <SelectItem key={i} value={font.name}>
              <div className="flex items-center gap-4">
                <span className="capitalize">{font.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSelect;
