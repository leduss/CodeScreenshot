'use client';

import React from 'react';
import { Slider } from '../ui/slider';
import { useMyContext } from 'app/context';

const PaddingRange = () => {
  const { padding, updatePadding } = useMyContext();

  return (
    <div className="flex w-full h-10 items-center">
      <p className="w-[40%] text-sm">Padding</p>
      <Slider
        className="w-[60%]"
        defaultValue={[padding]}
        min={0}
        max={64}
        step={8}
        onValueChange={(value) => updatePadding(value[0] || 0)}
      />
    </div>
  );
};

export default PaddingRange;
