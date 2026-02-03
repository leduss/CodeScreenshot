'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { Button } from '../ui/button';
import { OsEnum } from '@/lib/enum';
import { useTranslation } from '@/hooks/useTranslation';

const OsSelect = () => {
  const { os, setOs } = useStore();
  const { t: translations } = useTranslation();

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-2/5 text-sm">{translations.windows}</p>
      <div className="flex items-center gap-2">
        <Button
          className={os === OsEnum.mac ? 'border-primary' : ''}
          value={OsEnum.mac}
          variant="secondary"
          size="sm"
          onClick={() => setOs(OsEnum.mac)}
          aria-pressed={os === OsEnum.mac}
        >
          {translations.mac}
        </Button>
        <Button
          className={os === OsEnum.none ? 'border-primary' : ''}
          value={OsEnum.none}
          variant="secondary"
          size="sm"
          onClick={() => setOs(OsEnum.none)}
          aria-pressed={os === OsEnum.none}
        >
          {translations.none}
        </Button>
      </div>
    </div>
  );
};

export default OsSelect;
