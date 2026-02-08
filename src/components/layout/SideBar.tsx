'use client';

import React, { useState } from 'react';
import {
  SyntaxThemeSelect,
  LineNumbers,
  Range,
  FontSelect,
  LanguageToggle,
} from '@/components/controls';
import {
  Checkbox,
  Input,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
} from '@/components/ui';
import { useStore } from '@/store/useStore';
import { fontSizeOptions, roundedOption } from '@/constants';
import { SiteConfig } from '@/config/site-config';
import { useTranslation } from '@/hooks/useTranslation';
import { toPng } from 'html-to-image';
import { toast } from 'sonner';
import { ThemeToggle } from '../theme';

interface SideBarProps {
  editorRef?: React.RefObject<HTMLDivElement | null>;
  editorTitle?: string;
}

const SideBar = ({ editorRef, editorTitle }: SideBarProps) => {
  const {
    indexRounded,
    indexFontSize,
    setFontSize,
    rounded,
    zenMode,
    setZenMode,
    lineHeight,
    setLineHeight,
    letterSpacing,
    setLetterSpacing,
    watermarkText,
    setWatermarkText,
    watermarkPosition,
    setWatermarkPosition,
    snippetTitle,
    setSnippetTitle,
    snippetDescription,
    setSnippetDescription,
    exportFormat,
    setExportFormat,
    exportQuality,
    setExportQuality,
    exportWidth,
    setExportWidth,
    exportHeight,
    setExportHeight,
    exportLockRatio,
    setExportLockRatio,
  } = useStore();
  const { t: translations } = useTranslation();
  const radiusClass = rounded?.value ?? 'rounded-[22px]';
  const glowRadiusClass = rounded?.value ?? 'rounded-[24px]';
  const [exportOpen, setExportOpen] = useState(false);
  const [exporting, setExporting] = useState(false);
  const watermarkOptions = [
    { value: 'top-left', label: 'Top left' },
    { value: 'top-right', label: 'Top right' },
    { value: 'bottom-left', label: 'Bottom left' },
    { value: 'bottom-right', label: 'Bottom right' },
    { value: 'center', label: 'Center' },
  ];
  const handleWidthChange = (value: number) => {
    const next = Math.max(100, Math.round(value));
    if (!exportLockRatio) {
      setExportWidth(next);
      return;
    }
    const ratio = exportHeight === 0 ? 1 : exportWidth / exportHeight;
    setExportWidth(next);
    setExportHeight(Math.max(100, Math.round(next / ratio)));
  };

  const handleHeightChange = (value: number) => {
    const next = Math.max(100, Math.round(value));
    if (!exportLockRatio) {
      setExportHeight(next);
      return;
    }
    const ratio = exportHeight === 0 ? 1 : exportWidth / exportHeight;
    setExportHeight(next);
    setExportWidth(Math.max(100, Math.round(next * ratio)));
  };

  const handleExport = async () => {
    if (!editorRef?.current) return;
    setExporting(true);
    try {
      const editorEl = editorRef.current;
      const rect = editorEl.getBoundingClientRect();
      const headerEl = editorEl.querySelector('header') as HTMLElement | null;
      const footerEl = editorEl.querySelector('footer') as HTMLElement | null;
      const scrollerEl = editorEl.querySelector(
        '.cm-scroller'
      ) as HTMLElement | null;
      const headerHeight = headerEl?.offsetHeight ?? 0;
      const footerHeight = footerEl?.offsetHeight ?? 0;
      const fullCodeHeight = scrollerEl?.scrollHeight ?? rect.height;

      const prevEditorStyle = {
        width: editorEl.style.width,
        height: editorEl.style.height,
        maxHeight: editorEl.style.maxHeight,
        overflow: editorEl.style.overflow,
      };
      const prevScrollerStyle = {
        height: scrollerEl?.style.height,
        overflow: scrollerEl?.style.overflow,
      };
      editorEl.style.width = `${rect.width}px`;
      editorEl.style.height = `${headerHeight + footerHeight + fullCodeHeight}px`;
      editorEl.style.maxHeight = 'none';
      editorEl.style.overflow = 'visible';
      if (scrollerEl) {
        scrollerEl.style.height = `${fullCodeHeight}px`;
        scrollerEl.style.overflow = 'visible';
      }

      editorEl.querySelectorAll<HTMLElement>('*').forEach((el) => {
        el.style.backdropFilter = 'none';
        el.style.filter = 'none';
      });
      await new Promise((resolve) => requestAnimationFrame(resolve));
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const contentHeight = headerHeight + footerHeight + fullCodeHeight;
      const aspect = rect.width === 0 ? 1 : contentHeight / rect.width;
      const targetWidth = exportWidth;
      const targetHeight = exportLockRatio
        ? Math.round(targetWidth * aspect)
        : exportHeight;
      const exportRoot = editorEl.querySelector('[data-export-root]') as
        | HTMLElement
        | null;
      const resolvedBg = exportRoot
        ? getComputedStyle(exportRoot).backgroundColor
        : 'rgba(0, 0, 0, 0)';
      const backgroundColor =
        resolvedBg === 'rgba(0, 0, 0, 0)' ? '#121316' : resolvedBg;
      const prevRootBg = exportRoot?.style.backgroundColor;
      if (exportRoot) exportRoot.style.backgroundColor = backgroundColor;
      const options = {
        width: rect.width,
        height: contentHeight,
        canvasWidth: targetWidth,
        canvasHeight: targetHeight,
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor,
      };

      let image = '';
      if (exportFormat === 'jpg') {
        const pngDataUrl = await toPng(editorEl, options);
        image = await new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
              reject(new Error('Canvas context not available'));
              return;
            }
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/jpeg', exportQuality / 100));
          };
          img.onerror = () => reject(new Error('Image load failed'));
          img.src = pngDataUrl;
        });
      } else {
        image = await toPng(editorEl, options);
      }

      const filenameBase =
        editorTitle?.trim() || snippetTitle?.trim() || 'snippet';
      const link = document.createElement('a');
      link.href = image;
      link.download = `${filenameBase}.${exportFormat}`;
      link.click();
      toast.success(translations.downloadSuccess);
      setExportOpen(false);
      if (exportRoot && prevRootBg !== undefined) {
        exportRoot.style.backgroundColor = prevRootBg;
      }
      editorEl.style.width = prevEditorStyle.width;
      editorEl.style.height = prevEditorStyle.height;
      editorEl.style.maxHeight = prevEditorStyle.maxHeight;
      editorEl.style.overflow = prevEditorStyle.overflow;
      if (scrollerEl) {
        scrollerEl.style.height = prevScrollerStyle.height ?? '';
        scrollerEl.style.overflow = prevScrollerStyle.overflow ?? '';
      }
    } catch {
      toast.error(translations.error);
    } finally {
      setExporting(false);
    }
  };

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
          {SiteConfig.title}
        </header>

        <div className="relative flex-1 overflow-y-auto px-4 py-2 text-sm text-muted-foreground">
          <section className="flex w-full flex-col">
            <Range
              defaultValue={indexRounded}
              max={roundedOption.length}
              title={translations.rounded}
              type="SET_ROUNDED"
            />
          </section>

          <div className="my-4 h-px w-full bg-white/5" />

          <section className="flex w-full flex-col gap-1">
            <SyntaxThemeSelect />
            <LineNumbers />
            <label className="mt-1 flex items-center justify-between text-sm">
              <span>{translations.zenMode}</span>
              <Checkbox
                checked={zenMode}
                onCheckedChange={(checked) => setZenMode(!!checked)}
              />
            </label>
          </section>

          <div className="my-4 h-px w-full bg-white/5" />

          <section className="flex w-full flex-col gap-2">
            <FontSelect />
            <div className="flex items-center justify-between text-sm">
              <span>{translations.fontSize}</span>
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
            />
            <div className="flex items-center justify-between text-sm">
              <span>{translations.lineHeight}</span>
              <span className="text-xs text-white/50">
                {lineHeight.toFixed(2)}
              </span>
            </div>
            <Slider
              value={[lineHeight]}
              min={1.2}
              max={2.2}
              step={0.05}
              onValueChange={(value) => setLineHeight(value[0] ?? 1.6)}
            />

            <div className="mt-2 flex items-center justify-between text-sm">
              <span>{translations.letterSpacing}</span>
              <span className="text-xs text-white/50">
                {letterSpacing.toFixed(2)}em
              </span>
            </div>
            <Slider
              value={[letterSpacing]}
              min={-0.05}
              max={0.2}
              step={0.01}
              onValueChange={(value) => setLetterSpacing(value[0] ?? 0)}
            />
          </section>

          <div className="my-4 h-px w-full bg-white/5" />

          <section className="flex w-full flex-col gap-2">
            <h3 className="pb-1 text-sm font-medium text-white/80">
              {translations.watermark}
            </h3>
            <Input
              placeholder={translations.watermarkPlaceholder}
              value={watermarkText}
              onChange={(event) => setWatermarkText(event.target.value)}
              className="h-9"
            />
            <Select
              value={watermarkPosition}
              onValueChange={setWatermarkPosition}
            >
              <SelectTrigger className="h-9">
                <SelectValue placeholder={translations.watermarkPosition} />
              </SelectTrigger>
              <SelectContent>
                {watermarkOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </section>

          <div className="my-4 h-px w-full bg-white/5" />

          <section className="flex w-full flex-col gap-2">
            <h3 className="pb-1 text-sm font-medium text-white/80">
              {translations.snippetMeta}
            </h3>
            <Input
              placeholder={translations.snippetTitle}
              value={snippetTitle}
              onChange={(event) => setSnippetTitle(event.target.value)}
              className="h-9"
            />
            <textarea
              placeholder={translations.snippetDescription}
              value={snippetDescription}
              onChange={(event) => setSnippetDescription(event.target.value)}
              rows={3}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-white/80 shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </section>

          <div className="my-4 h-px w-full bg-white/5" />
        </div>

        <div className="relative flex items-center justify-end gap-3 border-t border-white/5 bg-[#17181b] px-4 py-3 text-xs text-muted-foreground">
          <ThemeToggle />
          <div className="h-6 w-px bg-white/10" />
          <Dialog open={exportOpen} onOpenChange={setExportOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 text-xs font-medium text-white/80 transition hover:bg-white/10"
              >
                {translations.exportSettings}
              </button>
            </DialogTrigger>
            <DialogContent className="border-white/10 bg-[#121316] text-white">
              <DialogHeader className="text-left">
                <DialogTitle>{translations.exportSettings}</DialogTitle>
                <DialogDescription className="text-white/60">
                  {translations.export}
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/80">
                    {translations.exportFormat}
                  </label>
                  <Select
                    value={exportFormat}
                    onValueChange={(value) =>
                      setExportFormat(value as 'png' | 'jpg')
                    }
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
                  <div className="flex items-center justify-between text-sm">
                    <span>{translations.exportQuality}</span>
                    <span className="text-xs text-white/50">
                      {exportQuality}%
                    </span>
                  </div>
                  <Slider
                    value={[exportQuality]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={(value) =>
                      setExportQuality(value[0] ?? exportQuality)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-white/80">
                      {translations.exportWidth}
                    </label>
                    <Input
                      type="number"
                      min={100}
                      value={exportWidth}
                      onChange={(event) =>
                        handleWidthChange(Number(event.target.value))
                      }
                      className="h-9"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-white/80">
                      {translations.exportHeight}
                    </label>
                    <Input
                      type="number"
                      min={100}
                      value={exportHeight}
                      onChange={(event) =>
                        handleHeightChange(Number(event.target.value))
                      }
                      className="h-9"
                    />
                  </div>
                </div>

                <label className="flex items-center justify-between text-sm">
                  <span>{translations.exportLockRatio}</span>
                  <Checkbox
                    checked={exportLockRatio}
                    onCheckedChange={(checked) => setExportLockRatio(!!checked)}
                  />
                </label>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <button
                    type="button"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
                  >
                    {translations.none}
                  </button>
                </DialogClose>
                <button
                  type="button"
                  onClick={handleExport}
                  disabled={exporting || !editorRef?.current}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition disabled:opacity-50"
                >
                  {translations.export}
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="h-6 w-px bg-white/10" />
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
