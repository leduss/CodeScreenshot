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

const FontSelect = () => {
  const { font, setFont } = useStore();
  const { t } = useTranslation();

  return (
    <div className="flex h-9 w-full items-center">
      <span className="w-2/5 text-sm">{t.font}</span>
      <Select value={font?.name} onValueChange={setFont}>
        <SelectTrigger className="w-3/5 text-xs" aria-label={t.font}>
          <SelectValue placeholder={t.font} />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((f) => (
            <SelectItem key={f.name} value={f.name}>
              <span className="capitalize">{f.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSelect;
