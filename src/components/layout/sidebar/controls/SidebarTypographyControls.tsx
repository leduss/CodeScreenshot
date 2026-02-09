'use client';

import { FontSelect } from '@/components/controls';
import { Separator, Slider } from '@/components/ui';
import { fontSizeOptions } from '@/constants';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';
import { ProBadge } from '../../../controls/ProBadge';

export function SidebarTypographyControls() {
  const isPro = useStore((state) => state.isPro);
  const indexFontSize = useStore((state) => state.indexFontSize);
  const setFontSize = useStore((state) => state.setFontSize);
  const lineHeight = useStore((state) => state.lineHeight);
  const setLineHeight = useStore((state) => state.setLineHeight);
  const letterSpacing = useStore((state) => state.letterSpacing);
  const setLetterSpacing = useStore((state) => state.setLetterSpacing);
  const { t: translations } = useTranslation();

  return (
    <section className="flex w-full flex-col gap-2">
      <FontSelect />
      <div className="flex items-center justify-between text-sm">
        <span>
          {translations.fontSize}
          {!isPro && <ProBadge />}
        </span>
        <span className="text-xs text-white/50">
          {fontSizeOptions[indexFontSize]?.px ?? ''}
        </span>
      </div>
      <Slider
        value={[indexFontSize]}
        min={0}
        max={fontSizeOptions.length - 1}
        step={1}
        onValueChange={(value) => setFontSize(value[0] ?? indexFontSize)}
        disabled={!isPro}
      />
      <div className="flex items-center justify-between text-sm">
        <span>
          {translations.lineHeight}
          {!isPro && <ProBadge />}
        </span>
        <span className="text-xs text-white/50">{lineHeight.toFixed(2)}</span>
      </div>
      <Slider
        value={[lineHeight]}
        min={1.2}
        max={2.2}
        step={0.05}
        onValueChange={(value) => setLineHeight(value[0] ?? 1.6)}
        disabled={!isPro}
      />

      <div className="mt-2 flex items-center justify-between text-sm">
        <span>
          {translations.letterSpacing}
          {!isPro && <ProBadge />}
        </span>
        <span className="text-xs text-white/50">{letterSpacing.toFixed(2)}em</span>
      </div>
      <Slider
        value={[letterSpacing]}
        min={-0.05}
        max={0.2}
        step={0.01}
        onValueChange={(value) => setLetterSpacing(value[0] ?? 0)}
        disabled={!isPro}
      />
      <Separator className="my-2" />
    </section>
  );
}
