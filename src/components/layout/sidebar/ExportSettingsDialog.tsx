"use client";

import Link from 'next/link';
import { Info } from 'lucide-react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
} from '@/components/ui';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import type { TranslationKeys } from '@/data/translations';
import { ProBadge } from '@/components/controls/ProBadge';

interface ExportFeature {
  key: string;
  label: string;
  locked: boolean;
}

interface ExportSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isPro: boolean;
  translations: TranslationKeys;
  exportFormat: 'png' | 'jpg';
  onExportFormatChange: (value: 'png' | 'jpg') => void;
  exportFileName: string;
  onExportFileNameChange: (value: string) => void;
  exportSocialPreset: 'none' | 'x' | 'linkedin';
  onExportSocialPresetChange: (value: 'none' | 'x' | 'linkedin') => void;
  onSocialPreset: (value: 'x' | 'linkedin') => void;
  exportQuality: number;
  onExportQualityChange: (value: number) => void;
  exportWidth: number;
  exportHeight: number;
  onExportWidthChange: (value: number) => void;
  onExportHeightChange: (value: number) => void;
  exportRatioPreset: 'auto' | '1:1' | '4:5' | '16:9';
  onExportRatioPresetChange: (value: 'auto' | '1:1' | '4:5' | '16:9') => void;
  exportPaginate: boolean;
  exportLockRatio: boolean;
  onExportLockRatioChange: (value: boolean) => void;
  exportLong: boolean;
  onExportLongChange: (value: boolean) => void;
  onExportPaginateChange: (value: boolean) => void;
  exportPageHeight: number;
  onExportPageHeightChange: (value: number) => void;
  exportEstimatedLabel: string;
  exportPreviewLoading: boolean;
  onOpenPreview: () => void;
  onShare: (network: 'x' | 'linkedin') => void;
  exportFeatureList: ExportFeature[];
  remainingLabel: string | undefined;
  onResetFreeExports: () => void;
  exporting: boolean;
  canExport: boolean;
  onExport: () => void;
}

export function ExportSettingsDialog({
  open,
  onOpenChange,
  isPro,
  translations,
  exportFormat,
  onExportFormatChange,
  exportFileName,
  onExportFileNameChange,
  exportSocialPreset,
  onExportSocialPresetChange,
  onSocialPreset,
  exportQuality,
  onExportQualityChange,
  exportWidth,
  exportHeight,
  onExportWidthChange,
  onExportHeightChange,
  exportRatioPreset,
  onExportRatioPresetChange,
  exportPaginate,
  exportLockRatio,
  onExportLockRatioChange,
  exportLong,
  onExportLongChange,
  onExportPaginateChange,
  exportPageHeight,
  onExportPageHeightChange,
  exportEstimatedLabel,
  exportPreviewLoading,
  onOpenPreview,
  onShare,
  exportFeatureList,
  remainingLabel,
  onResetFreeExports,
  exporting,
  canExport,
  onExport,
}: ExportSettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="sm">
          {translations.exportSettings}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] w-11/12 flex-col overflow-hidden  sm:max-w-5xl">
        <DialogHeader className="text-left">
          <DialogTitle>{translations.exportSettings}</DialogTitle>
        </DialogHeader>
        <div
          className={`grid min-h-0 flex-1 gap-4 ${
            !isPro ? 'lg:grid-cols-[320px_minmax(0,1fr)]' : 'grid-cols-1'
          }`}
        >
          {!isPro && (
            <aside className="min-h-0 overflow-y-auto rounded border border-white/10 bg-white/[0.03] p-2">
              <div className="rounded border border-white/5 bg-white/5 p-2">
                <p className="text-xs uppercase text-white/50">
                  {translations.exportFeaturesTitle}
                </p>
                <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-white/70">
                  {exportFeatureList.map((feature) => (
                    <li
                      key={feature.key}
                      className="flex items-center justify-between rounded border border-white/5 bg-white/5 px-2 py-1"
                    >
                      <span>{feature.label}</span>
                      {feature.locked && <ProBadge className="ml-0 px-2" />}
                    </li>
                  ))}
                </ul>
                {remainingLabel && (
                  <>
                    <p className="mt-2 text-[10px] text-white/50">
                      {remainingLabel}
                    </p>
                    {process.env.NODE_ENV === 'development' && (
                      <div className="mt-2 flex justify-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={onResetFreeExports}
                          className="text-xs uppercase"
                        >
                          {translations.exportResetDev}
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="mt-3 rounded border border-white/5 bg-white/5 p-3 text-xs text-white/70">
                <p className="font-semibold text-white">
                  {translations.exportGuideTitle}
                </p>
                <p className="mt-1 text-[11px]/relaxed text-white/60">
                  {translations.exportGuideDescription}
                </p>
                <Link
                  href="/pricing"
                  className="mt-2 inline-flex text-[11px] font-semibold uppercase tracking-wide text-primary hover:text-primary-foreground"
                >
                  {translations.exportGuideLink}
                </Link>
              </div>
            </aside>
          )}

          <div className="flex min-h-0 flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto pr-1 pl-1">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/80">
                    {translations.exportFormat}
                    {!isPro && <ProBadge />}
                  </label>
                  <Select
                    value={exportFormat}
                    onValueChange={(value) =>
                      onExportFormatChange(value as 'png' | 'jpg')
                    }
                    disabled={!isPro}
                  >
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder={translations.exportFormat} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="png">{translations.png}</SelectItem>
                      <SelectItem value="jpg">{translations.jpg}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/80">
                    {translations.exportName}
                    {!isPro && <ProBadge />}
                  </label>
                  <Input
                    type="text"
                    value={exportFileName}
                    placeholder={translations.exportNamePlaceholder}
                    onChange={(event) =>
                      onExportFileNameChange(event.target.value)
                    }
                    className="h-9"
                    disabled={!isPro}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="inline-flex items-center gap-1.5 text-sm text-white/80">
                  {translations.exportSocialPreset}
                  {!isPro && <ProBadge />}
                  <HoverCard openDelay={120}>
                    <HoverCardTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label={translations.exportInfoSocialAria}
                        className="size-4 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:bg-transparent hover:text-white"
                      >
                        <Info className="size-3" />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="w-64 text-xs leading-relaxed"
                      side="right"
                    >
                      {translations.exportSocialHint}
                    </HoverCardContent>
                  </HoverCard>
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onExportSocialPresetChange('none')}
                    className={`h-auto border bg-transparent px-2 py-1 text-[11px] uppercase ${
                      exportSocialPreset === 'none'
                        ? 'border-primary text-primary'
                        : 'border-white/20 text-white/60 hover:border-primary/50'
                    }`}
                    disabled={!isPro}
                  >
                    {translations.none}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onSocialPreset('x')}
                    className={`h-auto border bg-transparent px-2 py-1 text-[11px] uppercase ${
                      exportSocialPreset === 'x'
                        ? 'border-primary text-primary'
                        : 'border-white/20 text-white/60 hover:border-primary/50'
                    }`}
                    disabled={!isPro}
                  >
                    X
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onSocialPreset('linkedin')}
                    className={`h-auto border bg-transparent px-2 py-1 text-[11px] uppercase ${
                      exportSocialPreset === 'linkedin'
                        ? 'border-primary text-primary'
                        : 'border-white/20 text-white/60 hover:border-primary/50'
                    }`}
                    disabled={!isPro}
                  >
                    LinkedIn
                  </Button>
                </div>
                <p className="text-[11px] text-white/40">
                  {translations.exportSocialHint}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    {translations.exportQuality}
                    {!isPro && <ProBadge />}
                    <HoverCard openDelay={120}>
                      <HoverCardTrigger asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label={translations.exportInfoQualityAria}
                          className="size-4 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:bg-transparent hover:text-white"
                        >
                          <Info className="size-3" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent
                        className="w-64 text-xs leading-relaxed"
                        side="right"
                      >
                        {translations.exportInfoQualityText}
                      </HoverCardContent>
                    </HoverCard>
                  </span>
                  <span className="text-xs text-white/50">
                    {isPro ? exportQuality : 80}%
                  </span>
                </div>
                <Slider
                  value={[isPro ? exportQuality : 80]}
                  min={10}
                  max={100}
                  step={1}
                  onValueChange={(value) =>
                    onExportQualityChange(value[0] ?? exportQuality)
                  }
                  disabled={!isPro}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/80">
                    {translations.exportWidth}
                    {!isPro && <ProBadge />}
                  </label>
                  <Input
                    type="number"
                    min={100}
                    value={isPro ? exportWidth : 1200}
                    onChange={(event) =>
                      onExportWidthChange(
                        Number.isFinite(Number(event.target.value))
                          ? Number(event.target.value)
                          : exportWidth
                      )
                    }
                    className="h-9"
                    disabled={!isPro}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/80">
                    {translations.exportHeight}
                    {!isPro && <ProBadge />}
                  </label>
                  {isPro ? (
                    <Input
                      type="number"
                      min={100}
                      value={exportHeight}
                      onChange={(event) =>
                        onExportHeightChange(
                          Number.isFinite(Number(event.target.value))
                            ? Number(event.target.value)
                            : exportHeight
                        )
                      }
                      className="h-9"
                    />
                  ) : (
                    <Input
                      type="text"
                      value={translations.exportRatioAuto}
                      className="h-9"
                      disabled
                    />
                  )}
                </div>
              </div>
              <p className="text-[11px] text-white/50">
                {translations.exportEstimatedOutput}: {exportEstimatedLabel}
              </p>
              {isPro && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={onOpenPreview}
                  disabled={exportPreviewLoading}
                  className="w-fit"
                >
                  {translations.exportPreview}
                </Button>
              )}

              <div className="flex flex-col gap-2">
                <label className="inline-flex items-center gap-1.5 text-sm text-white/80">
                  {translations.exportRatioPreset}
                  {!isPro && <ProBadge />}
                  <HoverCard openDelay={120}>
                    <HoverCardTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label={translations.exportInfoRatioAria}
                        className="size-4 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:bg-transparent hover:text-white"
                      >
                        <Info className="size-3" />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="w-64 text-xs leading-relaxed"
                      side="right"
                    >
                      {translations.exportInfoRatioText}
                    </HoverCardContent>
                  </HoverCard>
                </label>
                <Select
                  value={exportRatioPreset}
                  onValueChange={(value) =>
                    onExportRatioPresetChange(
                      value as 'auto' | '1:1' | '4:5' | '16:9'
                    )
                  }
                  disabled={!isPro || exportPaginate}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder={translations.exportRatioPreset} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">
                      {translations.exportRatioAuto}
                    </SelectItem>
                    <SelectItem value="1:1">
                      {translations.exportRatioSquare}
                    </SelectItem>
                    <SelectItem value="4:5">
                      {translations.exportRatioPortrait}
                    </SelectItem>
                    <SelectItem value="16:9">
                      {translations.exportRatioWide}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={exportLockRatio}
                    onCheckedChange={(checked) =>
                      onExportLockRatioChange(!!checked)
                    }
                    disabled={!isPro}
                  />
                  <span>
                    {translations.exportLockRatio}
                    {!isPro && <ProBadge />}
                  </span>
                </label>

                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={exportLong}
                    onCheckedChange={(checked) => onExportLongChange(!!checked)}
                    disabled={!isPro || exportPaginate}
                  />
                  <span className="inline-flex items-center gap-1.5">
                    {translations.exportLong}
                    {!isPro && <ProBadge />}
                    <HoverCard openDelay={120}>
                      <HoverCardTrigger asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label={translations.exportInfoLongAria}
                          className="size-4 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:bg-transparent hover:text-white"
                        >
                          <Info className="size-3" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-64 text-xs leading-relaxed">
                        {translations.exportInfoLongText}
                      </HoverCardContent>
                    </HoverCard>
                  </span>
                </label>

                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={exportPaginate}
                    onCheckedChange={(checked) =>
                      onExportPaginateChange(!!checked)
                    }
                    disabled={!isPro}
                  />
                  <span className="inline-flex items-center gap-1.5">
                    {translations.exportPagination}
                    {!isPro && <ProBadge />}
                    <HoverCard openDelay={120}>
                      <HoverCardTrigger asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label={translations.exportInfoPaginationAria}
                          className="size-4 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:bg-transparent hover:text-white"
                        >
                          <Info className="size-3" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-64 text-xs leading-relaxed">
                        {translations.exportInfoPaginationText}
                      </HoverCardContent>
                    </HoverCard>
                  </span>
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/80">
                  {translations.exportPageHeight}
                  {!isPro && <ProBadge />}
                </label>
                <Input
                  type="number"
                  min={200}
                  value={exportPageHeight}
                  onChange={(event) =>
                    onExportPageHeightChange(
                      Math.max(
                        200,
                        Number.isFinite(Number(event.target.value))
                          ? Number(event.target.value)
                          : exportPageHeight
                      )
                    )
                  }
                  className="h-9"
                  disabled={!isPro || !exportPaginate}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/80">
                  {translations.exportShare}
                  {!isPro && <ProBadge />}
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onShare('x')}
                    className="h-9 border-white/10 bg-white/5 text-xs text-white/80 hover:bg-white/10"
                    disabled={!isPro}
                  >
                    {translations.exportShareX}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onShare('linkedin')}
                    className="h-9 border-white/10 bg-white/5 text-xs text-white/80 hover:bg-white/10"
                    disabled={!isPro}
                  >
                    {translations.exportShareLinkedIn}
                  </Button>
                </div>
                <p className="text-[11px] text-white/40">
                  {translations.exportShareHint}
                </p>
              </div>
            </div>
            <DialogFooter className="border-t border-white/10 pt-3 sm:flex-row">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="h-9 border-white/10 bg-white/5 text-sm text-white/80 hover:bg-white/10"
                >
                  {translations.close}
                </Button>
              </DialogClose>
              <Button
                type="button"
                onClick={onExport}
                disabled={exporting || !canExport}
                className="h-9 text-sm"
              >
                {translations.export}
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
