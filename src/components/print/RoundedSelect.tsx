'use client';

import React from 'react';
import { roundedOption } from '@/lib/roundedOption';
import { useMyContext } from 'app/context';
import { Slider } from '../ui/slider';

const RoundedSelect = () => {
  const { indexRounded, updateRounded } = useMyContext();

  return (
    <div className="flex w-full h-10 items-center">
      <p className="w-[40%] text-sm mt-1">Rounded</p>
      <Slider
        className="w-[60%]"
        defaultValue={[indexRounded]}
        onValueChange={(value) => updateRounded(value[0] || 0)}
        min={0}
        max={roundedOption.length - 1}
        step={1}
      />
    </div>
  );
};

export default RoundedSelect;
