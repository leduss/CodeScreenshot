'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { toPng } from 'html-to-image';
import { toast } from 'sonner';
import { ThemeToggle } from '@/components/theme';
import { LanguageToggle } from '@/components/controls';
import { useStore } from '@/store/useStore';
import { useTranslation } from '@/hooks/useTranslation';
import { ExportSettingsDialog } from './ExportSettingsDialog';
import { ExportPreviewDialog } from './ExportPreviewDialog';
import { UpgradeLimitDialog } from './UpgradeLimitDialog';

interface SidebarFooterActionsProps {
  editorRef?: React.RefObject<HTMLDivElement | null>;
  editorTitle?: string;
  onExportCaptureChange?: (isCapturing: boolean) => void;
}

export function SidebarFooterActions({
  editorRef,
  editorTitle,
  onExportCaptureChange,
}: SidebarFooterActionsProps) {
  const {
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
    exportRatioPreset,
    setExportRatioPreset,
    exportLong,
    setExportLong,
    exportPaginate,
    setExportPaginate,
    exportPageHeight,
    setExportPageHeight,
    exportSocialPreset,
    setExportSocialPreset,
    isPro,
    exportsUsed,
    incrementExportsUsed,
    syncExportsUsed,
    resetExportsUsed,
  } = useStore();

  const { t: translations } = useTranslation();
  const [exportOpen, setExportOpen] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [exportFileName, setExportFileName] = useState('');
  const [exportNameTouched, setExportNameTouched] = useState(false);
  const [exportPreviewUrl, setExportPreviewUrl] = useState('');
  const [exportPreviewLoading, setExportPreviewLoading] = useState(false);
  const previewJobRef = useRef(0);

  useEffect(() => {
    const { prev, next } = syncExportsUsed();
    if (prev > next && next === 0) {
      toast(translations.limitResetMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!exportNameTouched) {
      setExportFileName(editorTitle?.trim() ?? '');
    }
  }, [editorTitle, exportNameTouched]);

  const exportFeatureList = [
    { key: 'zenMode', label: translations.zenMode, locked: !isPro },
    { key: 'lineNumbers', label: translations.lineNumbers, locked: !isPro },
    {
      key: 'highlightLines',
      label: translations.highlightLines,
      locked: !isPro,
    },
    { key: 'search', label: translations.search, locked: !isPro },
    { key: 'watermark', label: translations.watermark, locked: !isPro },
    { key: 'snippetMeta', label: translations.snippetMeta, locked: !isPro },
    { key: 'fontSize', label: translations.fontSize, locked: !isPro },
    { key: 'exportLong', label: translations.exportLong, locked: !isPro },
    {
      key: 'exportPagination',
      label: translations.exportPagination,
      locked: !isPro,
    },
    { key: 'splitMode', label: translations.splitModeTitle, locked: !isPro },
    {
      key: 'diffHighlight',
      label: translations.splitDiffTitle,
      locked: !isPro,
    },
    { key: 'share', label: translations.exportShare, locked: !isPro },
    {
      key: 'exportSettings',
      label: translations.exportSettings,
      locked: false,
    },
  ];

  const remainingExports = Math.max(0, 5 - exportsUsed);
  const remainingLabel = translations.freeExportsRemaining?.replace(
    '{count}',
    remainingExports.toString()
  );

  const getContentBasedHeight = (
    targetWidth: number,
    effectiveExportLong: boolean
  ) => {
    const editorEl = editorRef?.current;
    if (!editorEl) {
      const fallbackAspect =
        exportWidth > 0 && exportHeight > 0 ? exportHeight / exportWidth : 2 / 3;
      return Math.max(1, Math.round(targetWidth * fallbackAspect));
    }
    const rect = editorEl.getBoundingClientRect();
    const headerEl = editorEl.querySelector('header') as HTMLElement | null;
    const footerEl = editorEl.querySelector('footer') as HTMLElement | null;
    const scrollerEl = editorEl.querySelector('.cm-scroller') as HTMLElement | null;
    const headerHeight = headerEl?.offsetHeight ?? 0;
    const footerHeight = footerEl?.offsetHeight ?? 0;
    const fullCodeHeight = scrollerEl?.scrollHeight ?? rect.height;
    const visibleCodeHeight = scrollerEl?.clientHeight ?? fullCodeHeight;
    const codeHeight = effectiveExportLong ? fullCodeHeight : visibleCodeHeight;
    const contentHeight = headerHeight + footerHeight + codeHeight;
    const aspect = rect.width === 0 ? 1 : contentHeight / rect.width;
    return Math.max(1, Math.round(targetWidth * aspect));
  };

  const buildEstimatedExportLabel = () => {
    const effectivePaginate = isPro ? exportPaginate : false;
    const effectiveExportLong = isPro ? (effectivePaginate ? true : exportLong) : true;
    const targetWidth = isPro ? exportWidth : 1200;
    const useFixedSocialDimensions = isPro && exportSocialPreset !== 'none';
    const contentBasedHeight = getContentBasedHeight(targetWidth, effectiveExportLong);
    const ratioPreset = effectivePaginate ? 'auto' : isPro ? exportRatioPreset : 'auto';
    const ratioValue =
      ratioPreset === '1:1'
        ? 1
        : ratioPreset === '4:5'
        ? 4 / 5
        : ratioPreset === '16:9'
        ? 16 / 9
        : null;

    const finalHeight = useFixedSocialDimensions
      ? exportHeight
      : ratioValue
      ? Math.round(targetWidth / ratioValue)
      : isPro && !exportLockRatio
      ? exportHeight
      : contentBasedHeight;

    const pageCount = effectivePaginate
      ? Math.max(1, Math.ceil(finalHeight / Math.max(200, Math.round(exportPageHeight))))
      : 1;

    const base = `${targetWidth}x${finalHeight}`;
    if (pageCount <= 1) return base;
    return `${base} · ${translations.exportEstimatedPages.replace(
      '{count}',
      pageCount.toString()
    )}`;
  };

  const exportEstimatedLabel = buildEstimatedExportLabel();

  useEffect(() => {
    if (!previewOpen || !editorRef?.current || !isPro) {
      setExportPreviewLoading(false);
      return;
    }

    const jobId = previewJobRef.current + 1;
    previewJobRef.current = jobId;
    setExportPreviewLoading(true);

    const timer = window.setTimeout(async () => {
      let editorEl: HTMLDivElement | null = null;
      let scrollerEl: HTMLElement | null = null;
      let prevEditorStyle: {
        width: string;
        height: string;
        maxHeight: string;
        overflow: string;
      } | null = null;
      let prevScrollerStyle: {
        height?: string;
        overflow?: string;
      } | null = null;
      try {
        editorEl = editorRef.current;
        if (!editorEl) return;
        const effectivePaginate = isPro ? exportPaginate : false;
        const effectiveExportLong = isPro ? (effectivePaginate ? true : exportLong) : true;
        const rect = editorEl.getBoundingClientRect();
        const headerEl = editorEl.querySelector('header') as HTMLElement | null;
        const footerEl = editorEl.querySelector('footer') as HTMLElement | null;
        scrollerEl = editorEl.querySelector('.cm-scroller') as HTMLElement | null;
        const headerHeight = headerEl?.offsetHeight ?? 0;
        const footerHeight = footerEl?.offsetHeight ?? 0;
        const fullCodeHeight = scrollerEl?.scrollHeight ?? rect.height;
        const visibleCodeHeight = scrollerEl?.clientHeight ?? fullCodeHeight;
        const codeHeight = effectiveExportLong ? fullCodeHeight : visibleCodeHeight;
        const contentHeight = headerHeight + footerHeight + codeHeight;
        const aspect = rect.width === 0 ? 1 : contentHeight / rect.width;

        prevEditorStyle = {
          width: editorEl.style.width,
          height: editorEl.style.height,
          maxHeight: editorEl.style.maxHeight,
          overflow: editorEl.style.overflow,
        };
        prevScrollerStyle = {
          height: scrollerEl?.style.height,
          overflow: scrollerEl?.style.overflow,
        };
        editorEl.style.width = `${rect.width}px`;
        editorEl.style.height = `${contentHeight}px`;
        editorEl.style.maxHeight = 'none';
        editorEl.style.overflow = effectiveExportLong ? 'visible' : 'hidden';
        if (scrollerEl) {
          scrollerEl.style.height = `${codeHeight}px`;
          scrollerEl.style.overflow = effectiveExportLong ? 'visible' : 'hidden';
        }

        const targetWidth = isPro ? exportWidth : 1200;
        const ratioPreset = effectivePaginate ? 'auto' : isPro ? exportRatioPreset : 'auto';
        const ratioValue =
          ratioPreset === '1:1'
            ? 1
            : ratioPreset === '4:5'
            ? 4 / 5
            : ratioPreset === '16:9'
            ? 16 / 9
            : null;
        const useFixedSocialDimensions = isPro && exportSocialPreset !== 'none';
        const contentBasedHeight = Math.max(1, Math.round(targetWidth * aspect));

        const finalHeight = useFixedSocialDimensions
          ? exportHeight
          : ratioValue
          ? Math.round(targetWidth / ratioValue)
          : isPro && !exportLockRatio
          ? exportHeight
          : contentBasedHeight;

        const previewWidth = Math.max(640, Math.min(1400, targetWidth));
        const scaledBaseHeight = Math.max(1, Math.round(contentBasedHeight * (previewWidth / targetWidth)));
        const scaledFinalHeight = Math.max(1, Math.round(finalHeight * (previewWidth / targetWidth)));

        const exportRoot = editorEl.querySelector('[data-export-root]') as HTMLElement | null;
        const resolvedBg = exportRoot
          ? getComputedStyle(exportRoot).backgroundColor
          : 'rgba(0, 0, 0, 0)';
        const backgroundColor =
          resolvedBg === 'rgba(0, 0, 0, 0)' ? '#121316' : resolvedBg;

        let image = await toPng(editorEl, {
          width: rect.width,
          height: contentHeight,
          canvasWidth: previewWidth,
          canvasHeight: isPro && !useFixedSocialDimensions && !exportLockRatio
            ? scaledFinalHeight
            : scaledBaseHeight,
          pixelRatio: 2,
          cacheBust: true,
          backgroundColor,
        });

        if (ratioValue || useFixedSocialDimensions) {
          image = await new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              canvas.width = previewWidth;
              canvas.height = scaledFinalHeight;
              const ctx = canvas.getContext('2d');
              if (!ctx) {
                reject(new Error('Canvas context not available'));
                return;
              }
              ctx.fillStyle = backgroundColor;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              const scale = Math.min(
                canvas.width / img.width,
                canvas.height / img.height
              );
              const drawWidth = Math.max(1, Math.round(img.width * scale));
              const drawHeight = Math.max(1, Math.round(img.height * scale));
              const dx = Math.floor((canvas.width - drawWidth) / 2);
              const dy = Math.floor((canvas.height - drawHeight) / 2);
              ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
              resolve(canvas.toDataURL('image/png'));
            };
            img.onerror = () => reject(new Error('Image load failed'));
            img.src = image;
          });
        }

        if (previewJobRef.current === jobId) {
          setExportPreviewUrl(image);
        }
      } catch {
        if (previewJobRef.current === jobId) {
          setExportPreviewUrl('');
        }
      } finally {
        if (editorEl && prevEditorStyle) {
          editorEl.style.width = prevEditorStyle.width;
          editorEl.style.height = prevEditorStyle.height;
          editorEl.style.maxHeight = prevEditorStyle.maxHeight;
          editorEl.style.overflow = prevEditorStyle.overflow;
        }
        if (scrollerEl && prevScrollerStyle) {
          scrollerEl.style.height = prevScrollerStyle.height ?? '';
          scrollerEl.style.overflow = prevScrollerStyle.overflow ?? '';
        }
        if (previewJobRef.current === jobId) {
          setExportPreviewLoading(false);
        }
      }
    }, 200);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    editorRef,
    exportHeight,
    exportLockRatio,
    exportLong,
    previewOpen,
    exportPaginate,
    exportRatioPreset,
    exportSocialPreset,
    exportWidth,
    isPro,
  ]);

  const handleWidthChange = (value: number) => {
    if (!Number.isFinite(value)) return;
    const next = Math.max(100, Math.round(value));
    if (exportSocialPreset !== 'none') setExportSocialPreset('none');
    if (!exportLockRatio) {
      setExportWidth(next);
      return;
    }
    const ratio =
      exportHeight > 0 && Number.isFinite(exportWidth / exportHeight)
        ? exportWidth / exportHeight
        : 1;
    setExportWidth(next);
    setExportHeight(Math.max(100, Math.round(next / ratio)));
  };

  const handleHeightChange = (value: number) => {
    if (!Number.isFinite(value)) return;
    const next = Math.max(100, Math.round(value));
    if (exportSocialPreset !== 'none') setExportSocialPreset('none');
    if (!exportLockRatio) {
      setExportHeight(next);
      return;
    }
    const ratio =
      exportHeight > 0 && Number.isFinite(exportWidth / exportHeight)
        ? exportWidth / exportHeight
        : 1;
    setExportHeight(next);
    setExportWidth(Math.max(100, Math.round(next * ratio)));
  };

  const handleSocialPreset = (preset: 'x' | 'linkedin') => {
    if (!isPro) return;
    const sizes = preset === 'x' ? { w: 1280, h: 720 } : { w: 1200, h: 627 };
    setExportSocialPreset(preset);
    setExportRatioPreset('auto');
    setExportLockRatio(true);
    setExportWidth(sizes.w);
    setExportHeight(sizes.h);
  };

  const handleShare = (network: 'x' | 'linkedin') => {
    if (!isPro) return;
    const url = encodeURIComponent(location.href);
    const baseName = exportFileName.trim() || 'snippet';
    const text = encodeURIComponent(
      translations.exportSharePostText.replace('{name}', baseName)
    );
    const shareUrl =
      network === 'x'
        ? `https://twitter.com/intent/tweet?text=${text}&url=${url}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleExport = async () => {
    if (!editorRef?.current) return;
    if (!isPro && exportsUsed >= 5) {
      setUpgradeOpen(true);
      return;
    }
    onExportCaptureChange?.(true);
    setExporting(true);
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

    let editorEl: HTMLDivElement | null = null;
    let scrollerEl: HTMLElement | null = null;
    let exportRoot: HTMLElement | null = null;
    let prevRootBg: string | undefined;
    let prevEditorStyle: {
      width: string;
      height: string;
      maxHeight: string;
      overflow: string;
    } | null = null;
    let prevScrollerStyle: {
      height?: string;
      overflow?: string;
    } | null = null;
    const prevEffectStyles: Array<{
      el: HTMLElement;
      filter: string;
      backdropFilter: string;
    }> = [];

    try {
      editorEl = editorRef.current;
      const effectiveExportLong = isPro ? (exportPaginate ? true : exportLong) : true;
      const effectivePaginate = isPro ? exportPaginate : false;
      const rect = editorEl.getBoundingClientRect();
      const headerEl = editorEl.querySelector('header') as HTMLElement | null;
      const footerEl = editorEl.querySelector('footer') as HTMLElement | null;
      scrollerEl = editorEl.querySelector('.cm-scroller') as HTMLElement | null;
      const headerHeight = headerEl?.offsetHeight ?? 0;
      const footerHeight = footerEl?.offsetHeight ?? 0;
      const fullCodeHeight = scrollerEl?.scrollHeight ?? rect.height;
      const visibleCodeHeight = scrollerEl?.clientHeight ?? fullCodeHeight;
      const codeHeight = effectiveExportLong ? fullCodeHeight : visibleCodeHeight;

      prevEditorStyle = {
        width: editorEl.style.width,
        height: editorEl.style.height,
        maxHeight: editorEl.style.maxHeight,
        overflow: editorEl.style.overflow,
      };
      prevScrollerStyle = {
        height: scrollerEl?.style.height,
        overflow: scrollerEl?.style.overflow,
      };
      editorEl.style.width = `${rect.width}px`;
      editorEl.style.height = `${headerHeight + footerHeight + codeHeight}px`;
      editorEl.style.maxHeight = 'none';
      editorEl.style.overflow = effectiveExportLong ? 'visible' : 'hidden';
      if (scrollerEl) {
        scrollerEl.style.height = `${codeHeight}px`;
        scrollerEl.style.overflow = effectiveExportLong ? 'visible' : 'hidden';
      }

      editorEl.querySelectorAll<HTMLElement>('*').forEach((el) => {
        prevEffectStyles.push({
          el,
          filter: el.style.filter,
          backdropFilter: el.style.backdropFilter,
        });
        el.style.backdropFilter = 'none';
        el.style.filter = 'none';
      });

      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      if (document.fonts?.ready) await document.fonts.ready;

      const contentHeight = headerHeight + footerHeight + codeHeight;
      const aspect = rect.width === 0 ? 1 : contentHeight / rect.width;
      const targetWidth = isPro ? exportWidth : 1200;
      const useFixedSocialDimensions = isPro && exportSocialPreset !== 'none';
      const contentBasedHeight = Math.max(1, Math.round(targetWidth * aspect));
      const targetHeight = isPro
        ? !useFixedSocialDimensions && !exportLockRatio
          ? exportHeight
          : contentBasedHeight
        : contentBasedHeight;
      const ratioPreset = effectivePaginate ? 'auto' : isPro ? exportRatioPreset : 'auto';
      const ratioValue =
        ratioPreset === '1:1'
          ? 1
          : ratioPreset === '4:5'
          ? 4 / 5
          : ratioPreset === '16:9'
          ? 16 / 9
          : null;

      exportRoot = editorEl.querySelector('[data-export-root]') as HTMLElement | null;
      const resolvedBg = exportRoot
        ? getComputedStyle(exportRoot).backgroundColor
        : 'rgba(0, 0, 0, 0)';
      const backgroundColor = resolvedBg === 'rgba(0, 0, 0, 0)' ? '#121316' : resolvedBg;
      prevRootBg = exportRoot?.style.backgroundColor;
      if (exportRoot) exportRoot.style.backgroundColor = backgroundColor;

      const options = {
        width: rect.width,
        height: contentHeight,
        canvasWidth: targetWidth,
        canvasHeight: targetHeight,
        // Keep exact exported dimensions from settings (no retina upscaling).
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor,
      };

      let image = '';
      const effectiveFormat = isPro ? exportFormat : 'png';
      const effectiveQuality = isPro ? exportQuality : 80;

      if (effectiveFormat === 'jpg') {
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
            resolve(canvas.toDataURL('image/jpeg', effectiveQuality / 100));
          };
          img.onerror = () => reject(new Error('Image load failed'));
          img.src = pngDataUrl;
        });
      } else {
        image = await toPng(editorEl, options);
      }

      if (ratioValue || useFixedSocialDimensions) {
        const outputWidth = targetWidth;
        const outputHeight = useFixedSocialDimensions
          ? exportHeight
          : Math.round(outputWidth / (ratioValue || 1));
        image = await new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = outputWidth;
            canvas.height = outputHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
              reject(new Error('Canvas context not available'));
              return;
            }
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const scale = Math.min(outputWidth / img.width, outputHeight / img.height);
            const drawWidth = Math.max(1, Math.round(img.width * scale));
            const drawHeight = Math.max(1, Math.round(img.height * scale));
            const dx = Math.floor((outputWidth - drawWidth) / 2);
            const dy = Math.floor((outputHeight - drawHeight) / 2);
            ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
            resolve(
              effectiveFormat === 'jpg'
                ? canvas.toDataURL('image/jpeg', effectiveQuality / 100)
                : canvas.toDataURL('image/png')
            );
          };
          img.onerror = () => reject(new Error('Image load failed'));
          img.src = image;
        });
      }

      const filenameBase = exportFileName.trim() || 'snippet';
      if (effectivePaginate) {
        await new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const pageHeight = Math.max(200, Math.round(exportPageHeight));
            const totalPages = Math.max(1, Math.ceil(img.height / pageHeight));
            for (let index = 0; index < totalPages; index += 1) {
              const sliceHeight =
                index === totalPages - 1 ? img.height - index * pageHeight : pageHeight;
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = sliceHeight;
              const ctx = canvas.getContext('2d');
              if (!ctx) continue;
              ctx.fillStyle = backgroundColor;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(
                img,
                0,
                index * pageHeight,
                img.width,
                sliceHeight,
                0,
                0,
                img.width,
                sliceHeight
              );
              const dataUrl =
                effectiveFormat === 'jpg'
                  ? canvas.toDataURL('image/jpeg', effectiveQuality / 100)
                  : canvas.toDataURL('image/png');
              const link = document.createElement('a');
              const suffix = String(index + 1).padStart(2, '0');
              link.href = dataUrl;
              link.download = `${filenameBase}-page-${suffix}.${effectiveFormat}`;
              link.click();
            }
            resolve();
          };
          img.onerror = () => reject(new Error('Image load failed'));
          img.src = image;
        });
      } else {
        const link = document.createElement('a');
        link.href = image;
        link.download = `${filenameBase}.${effectiveFormat}`;
        link.click();
      }

      toast.success(translations.downloadSuccess);
      if (!isPro) incrementExportsUsed();
      setExportOpen(false);
    } catch {
      toast.error(translations.error);
    } finally {
      if (exportRoot && prevRootBg !== undefined) exportRoot.style.backgroundColor = prevRootBg;
      if (editorEl && prevEditorStyle) {
        editorEl.style.width = prevEditorStyle.width;
        editorEl.style.height = prevEditorStyle.height;
        editorEl.style.maxHeight = prevEditorStyle.maxHeight;
        editorEl.style.overflow = prevEditorStyle.overflow;
      }
      if (scrollerEl && prevScrollerStyle) {
        scrollerEl.style.height = prevScrollerStyle.height ?? '';
        scrollerEl.style.overflow = prevScrollerStyle.overflow ?? '';
      }
      prevEffectStyles.forEach(({ el, filter, backdropFilter }) => {
        el.style.filter = filter;
        el.style.backdropFilter = backdropFilter;
      });
      setExporting(false);
      onExportCaptureChange?.(false);
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-between gap-3 border-t border-white/5 bg-[#17181b] px-4 py-3 text-xs text-muted-foreground">
        <ExportSettingsDialog
          open={exportOpen}
          onOpenChange={(value) => {
            setExportOpen(value);
            if (!value) setPreviewOpen(false);
          }}
          isPro={isPro}
          translations={translations}
          exportFormat={exportFormat}
          onExportFormatChange={setExportFormat}
          exportFileName={exportFileName}
          onExportFileNameChange={(value) => {
            setExportNameTouched(true);
            setExportFileName(value);
          }}
          exportSocialPreset={exportSocialPreset}
          onExportSocialPresetChange={setExportSocialPreset}
          onSocialPreset={handleSocialPreset}
          exportQuality={exportQuality}
          onExportQualityChange={setExportQuality}
          exportWidth={exportWidth}
          exportHeight={exportHeight}
          onExportWidthChange={handleWidthChange}
          onExportHeightChange={handleHeightChange}
          exportRatioPreset={exportRatioPreset}
          onExportRatioPresetChange={setExportRatioPreset}
          exportPaginate={exportPaginate}
          exportLockRatio={exportLockRatio}
          onExportLockRatioChange={setExportLockRatio}
          exportLong={exportLong}
          onExportLongChange={setExportLong}
          onExportPaginateChange={(enabled) => {
            setExportPaginate(enabled);
            if (enabled) setExportLong(true);
          }}
          exportPageHeight={exportPageHeight}
          onExportPageHeightChange={setExportPageHeight}
          exportEstimatedLabel={exportEstimatedLabel}
          exportPreviewLoading={exportPreviewLoading}
          onOpenPreview={() => setPreviewOpen(true)}
          onShare={handleShare}
          exportFeatureList={exportFeatureList}
          remainingLabel={remainingLabel}
          onResetFreeExports={() => {
            resetExportsUsed();
            toast.success(translations.limitResetMessage);
          }}
          exporting={exporting}
          canExport={!!editorRef?.current}
          onExport={handleExport}
        />
        <ExportPreviewDialog
          open={previewOpen}
          onOpenChange={setPreviewOpen}
          previewUrl={exportPreviewUrl}
          loading={exportPreviewLoading}
          translations={translations}
        />
        <UpgradeLimitDialog
          open={upgradeOpen}
          onOpenChange={setUpgradeOpen}
          translations={translations}
        />
        <div className="h-6 w-px bg-white/10" />
        <LanguageToggle />
      </div>
      <div className="flex items-start gap-1 px-4 pb-1 text-[11px] text-white/60">
        <span>{remainingLabel}</span>
        <Link href="/pricing" className="text-primary underline-offset-2 hover:underline">
          {translations.upgradeCta}
        </Link>
      </div>
    </>
  );
}
