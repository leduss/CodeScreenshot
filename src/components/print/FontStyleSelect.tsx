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

const FontStyleSelect = () => {
  const { state, dispatch } = useMyContext();
  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-[40%] text-sm">Font color</p>
      <Select
        value={state.fontStyle ? state.fontStyle.name : 'Selectionner un thème'}
        onValueChange={(value) =>
          dispatch({ type: 'SET_FONT_STYLE', payload: value })
        }
      >
        <SelectTrigger className="w-[60%] text-xs">
          <SelectValue placeholder="Selectionner un thème" />
        </SelectTrigger>
        <SelectContent className="dark">
          {fontStyleOptions.map((fontStyle, i) => (
            <SelectItem key={i} value={fontStyle.name}>
              <div className="flex items-center gap-4">
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
