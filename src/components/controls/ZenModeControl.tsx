'use client';

import { Checkbox } from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { ProBadge } from './ProBadge';

export function ZenModeControl() {
  const isPro = useStore((state) => state.isPro);
  const zenMode = useStore((state) => state.zenMode);
  const setZenMode = useStore((state) => state.setZenMode);
  const { t: translations } = useTranslation();

  return (
    <label className="mt-1 flex items-center justify-between text-sm">
      <span>
        {translations.zenMode}
        {!isPro && <ProBadge />}
      </span>
      <Checkbox
        checked={zenMode}
        onCheckedChange={(checked) => setZenMode(!!checked)}
        disabled={!isPro}
      />
    </label>
  );
}
