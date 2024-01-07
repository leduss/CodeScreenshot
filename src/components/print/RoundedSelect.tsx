'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { roundedOption } from '@/lib/roundedOption';
import { cn } from '@/lib/utils';
import { useMyContext } from 'app/context';

const RoundedSelect = () => {
  const { rounded, updateRounded } = useMyContext();

  return (
    <div className="flex w-full h-10 items-center">
      <p className="w-[40%] text-sm mt-1">Rounded</p>
      <Select
        value={rounded ? rounded.value : 'Selectionner un thème'}
        onValueChange={(value) => updateRounded(value)}
      >
        <SelectTrigger className="w-[60%] text-sm">
          <SelectValue placeholder="Selectionner un thème" />
        </SelectTrigger>
        <SelectContent className="dark">
          {roundedOption.map((rounded, i) => (
            <SelectItem key={i} value={rounded.value}>
              <div className="flex gap-4 items-center">
                <div
                  className={cn('h-4 w-8 border border-primary', rounded.value)}
                />
                <span className="capitalize">{rounded.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RoundedSelect;
