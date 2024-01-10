'use client';

import React from 'react';
import { useMyContext } from '@/context/context';
import { Button } from '../ui/button';
import { OsEnum } from '@/lib/enum';

const OsSelect = () => {
  const { state, dispatch } = useMyContext();

  return (
    <div className="flex h-10 w-full items-center">
      <p className="w-[40%] text-sm">Windows</p>
      <div className="flex items-center gap-2">
        <Button
          className={state.os === OsEnum.mac ? ' border-primary' : ''}
          value={OsEnum.mac}
          variant="secondary"
          size="sm"
          onClick={() => dispatch({ type: 'SET_OS', payload: OsEnum.mac })}
        >
          Mac
        </Button>
        <Button
          className={state.os === OsEnum.none ? 'border-primary' : ''}
          value={OsEnum.none}
          variant="secondary"
          size="sm"
          onClick={() => dispatch({ type: 'SET_OS', payload: OsEnum.none })}
        >
          None
        </Button>
      </div>
    </div>
  );
};

export default OsSelect;
