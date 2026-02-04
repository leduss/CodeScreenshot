'use client';

import { useStore } from '@/store/useStore';
import { Button } from '../ui/button';
import { OsEnum } from '@/constants/os-enum';
import { useTranslation } from '@/hooks/useTranslation';

const OsSelect = () => {
  const { os, setOs } = useStore();
  const { t } = useTranslation();

  return (
    <div className="flex h-9 w-full items-center">
      <span className="w-2/5 text-sm">{t.windows}</span>
      <div className="flex items-center gap-2" role="group" aria-label={t.windows}>
        <Button
          variant={os === OsEnum.mac ? 'default' : 'secondary'}
          size="sm"
          onClick={() => setOs(OsEnum.mac)}
          aria-pressed={os === OsEnum.mac}
        >
          {t.mac}
        </Button>
        <Button
          variant={os === OsEnum.none ? 'default' : 'secondary'}
          size="sm"
          onClick={() => setOs(OsEnum.none)}
          aria-pressed={os === OsEnum.none}
        >
          {t.none}
        </Button>
      </div>
    </div>
  );
};

export default OsSelect;
