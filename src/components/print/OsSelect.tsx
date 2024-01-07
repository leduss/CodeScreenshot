'use client';

import React from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '@radix-ui/react-label';
import { useMyContext } from 'app/context';

const OsSelect = () => {
  const { os, updateOs } = useMyContext();

  return (
    <div className="flex w-full h-10 items-center">
      <p className="w-[40%] text-sm">Windows</p>
      <RadioGroup
        defaultValue="mac"
        className="w-[60%] text-sm flex gap-6 h-10"
        value={os}
        onValueChange={(value) => updateOs(value)}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mac" id="r2" />
          <Label htmlFor="r2">Mac</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="none" id="r1" />
          <Label htmlFor="r1">None</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default OsSelect;
