'use client';

import { ProBadge } from '@/components/controls/ProBadge';
import { Button, Checkbox } from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';
import { useStore } from '@/store/useStore';

export function SidebarLayoutControls() {
  const isPro = useStore((state) => state.isPro);
  const layoutPreset = useStore((state) => state.layoutPreset);
  const setLayoutPreset = useStore((state) => state.setLayoutPreset);
  const splitMode = useStore((state) => state.splitMode);
  const setSplitMode = useStore((state) => state.setSplitMode);
  const diffHighlightEnabled = useStore((state) => state.diffHighlightEnabled);
  const setDiffHighlightEnabled = useStore(
    (state) => state.setDiffHighlightEnabled
  );
  const { t: translations } = useTranslation();

  return (
    <>
      <div className="mt-4 rounded border border-white/5 bg-[#17181b]/60 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
          {translations.layoutTitle}
        </p>
        <div className="mt-2 flex gap-2">
          {[
            { value: 'centered', label: translations.layoutCentered },
            { value: 'full', label: translations.layoutFull },
            { value: 'ratio', label: translations.layoutRatio },
          ].map((option) => (
            <Button
              key={option.value}
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                setLayoutPreset(option.value as 'centered' | 'full' | 'ratio')
              }
              className={`h-auto flex-1 border bg-transparent px-2 py-1 text-[11px] uppercase transition ${
                layoutPreset === option.value
                  ? 'border-primary text-primary'
                  : 'border-white/20 text-white/60 hover:border-primary/50'
              }`}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded border border-white/5 bg-[#17181b]/60 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
          {translations.splitModeTitle}
          {!isPro && <ProBadge />}
        </p>
        <div className="mt-2 flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSplitMode('single')}
            className={`h-auto flex-1 border bg-transparent px-2 py-1 text-[11px] uppercase transition ${
              splitMode === 'single'
                ? 'border-primary text-primary'
                : 'border-white/20 text-white/60 hover:border-primary/50'
            }`}
            disabled={!isPro}
          >
            {translations.splitSingle}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSplitMode('vertical')}
            className={`h-auto flex-1 border bg-transparent px-2 py-1 text-[11px] uppercase transition ${
              splitMode === 'vertical'
                ? 'border-primary text-primary'
                : 'border-white/20 text-white/60 hover:border-primary/50'
            }`}
            disabled={!isPro}
          >
            {translations.splitVertical}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSplitMode('horizontal')}
            className={`h-auto flex-1 border bg-transparent px-2 py-1 text-[11px] uppercase transition ${
              splitMode === 'horizontal'
                ? 'border-primary text-primary'
                : 'border-white/20 text-white/60 hover:border-primary/50'
            }`}
            disabled={!isPro}
          >
            {translations.splitHorizontal}
          </Button>
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span>
            {translations.splitDiffTitle}
            {!isPro && <ProBadge />}
          </span>
          <Checkbox
            checked={diffHighlightEnabled}
            onCheckedChange={(checked) => setDiffHighlightEnabled(!!checked)}
            disabled={!isPro || splitMode === 'single'}
          />
        </div>
      </div>
    </>
  );
}
