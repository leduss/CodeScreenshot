'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { roundedOption } from '@/constants';
import { useTranslation } from '@/hooks/useTranslation';
import { Slider } from '@/components/ui';
import { SidebarAppearanceControls } from './controls/SidebarAppearanceControls';
import { SidebarTypographyControls } from './controls/SidebarTypographyControls';
import { SidebarLayoutControls } from './controls/SidebarLayoutControls';
import { SidebarWatermarkControls } from './controls/SidebarWatermarkControls';
import { SidebarSnippetMetaControls } from './controls/SidebarSnippetMetaControls';

export function SidebarControlsPanel() {
  const indexRounded = useStore((state) => state.indexRounded);
  const setRounded = useStore((state) => state.setRounded);
  const { t: translations } = useTranslation();

  return (
    <div className="relative flex-1 overflow-y-auto px-4 py-2 text-sm text-muted-foreground">
      <section className="flex w-full flex-col">
        <div className="mb-2 text-sm text-white/80">{translations.rounded}</div>
        <Slider
          value={[indexRounded]}
          min={0}
          max={roundedOption.length - 1}
          step={1}
          onValueChange={(value) => setRounded(value[0] ?? indexRounded)}
        />
      </section>

      <div className="my-4 h-px w-full bg-white/5" />

      <SidebarAppearanceControls />

      <div className="my-4 h-px w-full bg-white/5" />

      <SidebarTypographyControls />

      <SidebarLayoutControls />

      <div className="my-4 h-px w-full bg-white/5" />
      <SidebarWatermarkControls />

      <div className="my-4 h-px w-full bg-white/5" />

      <SidebarSnippetMetaControls />
    </div>
  );
}
