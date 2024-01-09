'use client';

import React from 'react';
import { useMyContext } from '@/context/context';
import { Button } from '../ui/button';
import { OsEnum } from '@/lib/enum';

const OsSelect = () => {
  const { os, updateOs } = useMyContext();

  return (
    <div className="flex h-10 w-full items-center">
      <p className="w-[40%] text-sm">Windows</p>
      <div className="flex items-center gap-2">
        <Button
          className={os === OsEnum.mac ? 'ring-2 ring-inset ring-primary' : ''}
          value={OsEnum.mac}
          variant="secondary"
          size="sm"
          onClick={() => updateOs(OsEnum.mac)}
        >
          Mac
        </Button>
        <Button
          className={os === OsEnum.none ? 'ring-2 ring-inset ring-primary' : ''}
          value={OsEnum.none}
          variant="secondary"
          size="sm"
          onClick={() => updateOs(OsEnum.none)}
        >
          None
        </Button>
      </div>
    </div>
  );
};

export default OsSelect;
