'use client';

import React from 'react';
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

const FontSelect = () => {
  const { font, setFont } = useStore();
  const { t: translations } = useTranslation();

  return (
    <div className="flex h-9 w-full items-center">
      <p className="w-2/5 text-sm">{translations.font}</p>
      <Select
        value={font?.name || translations.font}
        onValueChange={(value) => setFont(value)}
      >
        <SelectTrigger className="w-3/5 text-xs">
          <SelectValue placeholder={translations.font} />
        </SelectTrigger>
        <SelectContent className="dark">
          {fonts.map((f, i) => (
            <SelectItem key={i} value={f.name}>
              <div className="flex items-center gap-4">
                <span className="capitalize">{f.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSelect;
