'use client';

import { Button } from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { ProBadge } from './ProBadge';



export function WindowStyleControl() {
  const isPro = useStore((state) => state.isPro);
  const windowStyle = useStore((state) => state.windowStyle);
  const setWindowStyle = useStore((state) => state.setWindowStyle);
  const { t: translations } = useTranslation();

  return (
    <div className="mt-2 rounded border border-white/5 bg-[#17181b]/60 p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
        {translations.windowStyle}
        {!isPro && <ProBadge />}
      </p>
      <div className="mt-2 flex gap-2">
        {[
          { value: 'mac', label: translations.mac },
          { value: 'windows', label: translations.windows },
          { value: 'linux', label: translations.linux },
          { value: 'minimal', label: translations.minimal },
        ].map((option) => (
          <Button
            key={option.value}
            variant="hero-outline"
            size="sm"
            disabled={!isPro}
            onClick={() =>
              setWindowStyle(
                option.value as 'mac' | 'windows' | 'linux' | 'minimal'
              )
            }
            className={`h-auto flex-1 bg-transparent px-2 py-1 text-[11px] uppercase ${
              windowStyle === option.value
                ? 'border-primary text-primary'
                : 'border-white/20 text-white/60 hover:border-primary/50'
            }`}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
