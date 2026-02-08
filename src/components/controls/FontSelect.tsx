'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useStore } from '@/store/useStore';
import { fonts } from '@/data/fonts';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect } from 'react';

const FontSelect = () => {
  const { font, setFont, isPro } = useStore();
  const { t } = useTranslation();
  const availableFonts = isPro
    ? fonts
    : fonts.filter((f) => f.name === 'Input');
  const lockedFontNames = new Set(
    fonts.filter((f) => f.name !== 'Input').map((f) => f.name)
  );

  useEffect(() => {
    if (!isPro && font?.name !== 'Input') {
      setFont('Input');
    }
  }, [isPro, font?.name, setFont]);

  return (
    <div className="flex h-9 w-full items-center">
      <span className="w-2/5 text-sm">{t.font}</span>
      <Select value={font?.name} onValueChange={setFont}>
        <SelectTrigger className="w-3/5 text-xs" aria-label={t.font}>
          <SelectValue placeholder={t.font} />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((f) => {
            const isLocked = !isPro && lockedFontNames.has(f.name);
            return (
              <SelectItem key={f.name} value={f.name} disabled={isLocked}>
                <span className="capitalize">{f.name}</span>
                {isLocked && (
                  <span className="ml-2 rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    Pro
                  </span>
                )}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSelect;
