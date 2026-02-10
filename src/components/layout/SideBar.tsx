'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { SiteConfig } from '@/config/site-config';
import { useTranslation } from '@/hooks/useTranslation';
import { SidebarControlsPanel } from './sidebar/SidebarControlsPanel';
import { SidebarFooterActions } from './sidebar/SidebarFooterActions';
import Logo from '../logo';

interface SideBarProps {
  editorRef?: React.RefObject<HTMLDivElement | null>;
  editorTitle?: string;
  onExportCaptureChange?: (isCapturing: boolean) => void;
}

const SideBar = ({
  editorRef,
  editorTitle,
  onExportCaptureChange,
}: SideBarProps) => {
  const rounded = useStore((state) => state.rounded);
  const isPro = useStore((state) => state.isPro);
  const setIsPro = useStore((state) => state.setIsPro);
  const { t: translations } = useTranslation();
  const isDev = process.env.NODE_ENV === 'development';
  const radiusClass = rounded?.value ?? 'rounded-[22px]';
  const glowRadiusClass = rounded?.value ?? 'rounded-[24px]';

  return (
    <div className={`group relative h-full w-96 ${radiusClass}`}>
      <div
        className={`absolute -inset-1 ${glowRadiusClass} bg-gradient-to-br from-[hsl(220_50%_35%/0.35)] via-transparent to-[hsl(260_45%_40%/0.35)] opacity-60 blur-xl`}
      />
      <div
        className={`relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#121316] shadow-[0_20px_60px_rgba(0,0,0,0.55)] ${radiusClass}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30" />

        <header className="relative flex h-12 items-center justify-center border-b border-white/5 bg-[#17181b] px-4 font-mono text-lg font-bold text-primary">
          <Logo />
        </header>

        {isDev && (
          <div className="flex items-center gap-3 border-b border-white/5 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-wider text-white/70">
            <span>{translations.devMode}</span>
            <span
              className="size-1.5 rounded-full bg-emerald-300"
              aria-hidden="true"
            />
            <span>
              {isPro ? translations.devProEnabled : translations.devFreeEnabled}
            </span>
            <button
              className="ml-auto rounded border border-white/20 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white transition hover:border-white/50"
              type="button"
              onClick={() => setIsPro(!isPro)}
            >
              {isPro ? translations.devSwitchToFree : translations.devSwitchToPro}
            </button>
          </div>
        )}

        <SidebarControlsPanel />

        <SidebarFooterActions
          editorRef={editorRef}
          editorTitle={editorTitle}
          onExportCaptureChange={onExportCaptureChange}
        />
      </div>
    </div>
  );
};

export default SideBar;
