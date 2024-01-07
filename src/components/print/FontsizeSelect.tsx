'use client';

import React from 'react';
import { useMyContext } from 'app/context';
import { fontSizeOptions } from '@/lib/fontSizeOption';
import { Slider } from '../ui/slider';

const FontSizeSelect = () => {
  const { indexFontSize, updateFontSize } = useMyContext();

  return (
    <div className="flex w-full h-10 items-center">
      <p className=" w-[40%] text-sm">Font size</p>
      <Slider
        className="w-[60%]"
        defaultValue={[indexFontSize]}
        onValueChange={(value) => updateFontSize(value[0] || 0)}
        min={0}
        max={fontSizeOptions.length - 1}
        step={1}
      />
    </div>
  );
};

export default FontSizeSelect;
