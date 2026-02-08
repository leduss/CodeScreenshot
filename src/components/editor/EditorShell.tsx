import React, { useEffect, useState } from 'react';
import { Copy, Download, Share2 } from 'lucide-react';
import { getLanguageExtension, getLanguageIcon } from '@/utils/language-icons';
import flourite from 'flourite';
import { useStore } from '@/store/useStore';

interface EditorShellProps {
  title: string;
  code: string;
  onTitleChange?: (value: string) => void;
  language?: string;
  onLanguageChange?: (value: string) => void;
  titleTextColor?: string;
  footerLeft?: string;
  footerRight?: string;
  children?: React.ReactNode;
  className?: string;
  roundedClass?: string;
  hideHeaderActionsDuringCapture?: boolean;
  hideFooterContentDuringCapture?: boolean;
}

const EditorShell = ({
  title,
  code,
  onTitleChange,
  language: initialLanguage = 'tsx',
  onLanguageChange,
  titleTextColor = '#e6e8ef',
  footerLeft,
  footerRight,
  children,
  className,
  roundedClass,
  hideHeaderActionsDuringCapture = false,
  hideFooterContentDuringCapture = false,
}: EditorShellProps) => {
  const {
    font,
    zenMode,
    watermarkText,
    watermarkPosition,
    showSignature,
    signatureText,
    isPro,
    windowStyle,
    exportFormat,
    exportWidth,
    exportHeight,
    exportsUsed,
  } = useStore();
  const radiusClass = roundedClass ?? 'rounded-[22px]';
  const glowRadiusClass = roundedClass ?? 'rounded-[24px]';
  const [isEditing, setIsEditing] = useState(false);
  const [language, setLanguage] = useState<string>(initialLanguage);
  const watermarkPositions: Record<string, string> = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const computedFooterRight =
    footerRight ??
    `${exportFormat.toUpperCase()} · ${exportWidth}×${exportHeight}${
      !isPro ? ` · ${Math.max(0, 5 - exportsUsed)} gratuits` : ''
    }`;

  useEffect(() => {
    const { language: detectedLanguage } = flourite(code, { noUnknown: true });
    let finalLanguage = detectedLanguage || 'typescript';

    const hasTypeScriptPattern =
      code.includes('interface') ||
      code.includes(' type ') ||
      code.includes(': Type') ||
      code.includes(': {') ||
      code.includes(' enum') ||
      code.includes('import type') ||
      code.includes('export type') ||
      code.includes(': string') ||
      code.includes(': number') ||
      code.includes(': boolean') ||
      code.includes(': any') ||
      code.includes(': void') ||
      code.includes(': unknown') ||
      code.includes(': never');

    const hasJSXPattern =
      code.includes('<>') ||
      code.includes('</') ||
      code.includes('/>') ||
      code.includes('onClick=') ||
      code.includes('onSubmit=') ||
      code.includes('onChange=');

    if (hasJSXPattern) {
      const lowerLanguage = finalLanguage.toLowerCase();
      if (
        hasTypeScriptPattern ||
        lowerLanguage === 'typescript' ||
        lowerLanguage === 'ts'
      ) {
        finalLanguage = 'tsx';
      } else if (lowerLanguage === 'javascript' || lowerLanguage === 'js') {
        finalLanguage = 'jsx';
      }
    }

    setLanguage(finalLanguage);
    onLanguageChange?.(finalLanguage);
  }, [code, onLanguageChange]);

  const getFullFilename = () => {
    const extension = getLanguageExtension(language);

    // If user is editing, return current title as-is
    if (isEditing) {
      return title;
    }

    // If title doesn't have an extension yet, add it
    if (!title.includes('.') || title.endsWith(' ')) {
      return (title + extension).trim();
    }

    // Title has an extension - check if it's a known extension to replace
    const parts = title.split('.');
    const ext = parts.pop();
    const base = parts.join('.');

    // Check if the extension is a known extension (should be replaced)
    const knownExtensions = [
      'ts',
      'tsx',
      'js',
      'jsx',
      'py',
      'rs',
      'go',
      'java',
      'cpp',
      'c',
      'rb',
      'php',
      'swift',
      'kt',
      'html',
      'css',
    ];

    if (ext && knownExtensions.includes(ext.toLowerCase())) {
      // Replace the extension with the current language's extension
      return base + extension;
    }

    // Unknown extension, add the current language's extension
    return title + extension;
  };

  const isZen = isPro ? zenMode : false;
  const forcedWatermark = 'SnapCode Free';
  const effectiveWatermarkText = isPro ? watermarkText : forcedWatermark;
  const effectiveSignatureText = isPro && showSignature ? signatureText : '';
  const footerContentClass = hideFooterContentDuringCapture
    ? 'opacity-0 pointer-events-none'
    : 'opacity-100';

  return (
    <div className={`group relative h-full ${className ?? ''}`}>
      <div
        className={`absolute -inset-1 ${glowRadiusClass} bg-gradient-to-br from-[hsl(220_50%_35%/0.35)] via-transparent to-[hsl(260_45%_40%/0.35)] opacity-60 blur-xl`}
      />
      <div
        data-export-root
        className={`relative h-full overflow-hidden border border-white/10 bg-[#121316] shadow-[0_20px_60px_rgba(0,0,0,0.55)] ${radiusClass}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30" />

        <div className="relative flex h-full flex-col">
          {!isZen && (
            <header className="relative flex h-12 items-center justify-between border-b border-white/5 bg-[#17181b] px-5">
              <div className="flex min-w-[64px] items-center gap-2" aria-hidden="true">
                {windowStyle === 'mac' && (
                  <>
                    <span className="size-3 rounded-full bg-[hsl(8_85%_55%)] shadow-[0_0_6px_hsl(8_85%_55%/0.45)]" />
                    <span className="size-3 rounded-full bg-[hsl(45_90%_50%)] shadow-[0_0_6px_hsl(45_90%_50%/0.45)]" />
                    <span className="size-3 rounded-full bg-[hsl(140_60%_45%)] shadow-[0_0_6px_hsl(140_60%_45%/0.45)]" />
                  </>
                )}
              </div>

              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
                <div className="inline-flex h-10 w-auto max-w-[280px] items-center gap-2 border-t border-violet-500 bg-white/10 px-3 backdrop-blur-sm">
                  <div className="flex size-5 shrink-0 items-center justify-center">
                    <span style={{ color: titleTextColor }}>
                      {getLanguageIcon(language)}
                    </span>
                  </div>
                  <input
                    className="placeholder:text-inherit/50 h-full w-[175px] border-none bg-transparent text-sm text-inherit outline-none"
                    style={{ color: titleTextColor }}
                    placeholder="nom fichier"
                    value={getFullFilename()}
                    onChange={(e) => onTitleChange?.(e.target.value)}
                    onFocus={() => setIsEditing(true)}
                    onBlur={() => setIsEditing(false)}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                {isPro && !hideHeaderActionsDuringCapture && (
                  <>
                    <button
                      className="rounded-md p-1.5 transition-colors hover:bg-white/5 hover:text-white"
                      type="button"
                      aria-label="Copier"
                    >
                      <Copy className="size-3.5" />
                    </button>
                    <button
                      className="rounded-md p-1.5 transition-colors hover:bg-white/5 hover:text-white"
                      type="button"
                      aria-label="Télécharger"
                    >
                      <Download className="size-3.5" />
                    </button>
                    <button
                      className="rounded-md p-1.5 transition-colors hover:bg-white/5 hover:text-primary"
                      type="button"
                      aria-label="Partager"
                    >
                      <Share2 className="size-3.5" />
                    </button>
                  </>
                )}
                {windowStyle === 'windows' && (
                  <div className="ml-2 flex items-center gap-1 text-[10px] text-white/60">
                    <span className="flex size-5 items-center justify-center rounded border border-white/10 bg-[hsl(210_35%_22%)] text-[hsl(200_60%_85%)]">
                      —
                    </span>
                    <span className="flex size-5 items-center justify-center rounded border border-white/10 bg-[hsl(210_35%_22%)] text-[hsl(200_60%_85%)]">
                      □
                    </span>
                    <span className="flex size-5 items-center justify-center rounded border border-white/10 bg-[hsl(4_75%_55%)] text-white">
                      ×
                    </span>
                  </div>
                )}
                {windowStyle === 'linux' && (
                  <div className="ml-2 flex items-center gap-1 text-[10px] font-semibold text-white/80">
                    <span className="flex size-5 items-center justify-center rounded-full border border-white/30  shadow-[0_0_6px_hsl(145_55%_45%/0.35)]">
                      —
                    </span>
                    <span className="flex size-5 items-center justify-center rounded-full border border-white/30  shadow-[0_0_6px_hsl(45_90%_55%/0.35)]">
                      □
                    </span>
                    <span className="flex size-5 items-center justify-center rounded-full border border-white/30 bg-[hsl(5_80%_55%)] shadow-[0_0_6px_hsl(5_80%_55%/0.35)]">
                      ×
                    </span>
                  </div>
                )}
              </div>
            </header>
          )}

          <div className="relative flex-1 overflow-hidden">
            <div className="relative h-full overflow-hidden">{children}</div>
            {effectiveWatermarkText?.trim() && (
              <div
                className={`pointer-events-none absolute ${watermarkPositions[watermarkPosition] ?? watermarkPositions['bottom-right']} text-xs font-medium uppercase tracking-[0.2em] text-white/30`}
              >
                {effectiveWatermarkText}
              </div>
            )}
            {effectiveSignatureText?.trim() && (
              <div className="pointer-events-none absolute bottom-3 right-4 text-[10px] font-medium uppercase tracking-[0.28em] text-white/30">
                {effectiveSignatureText}
              </div>
            )}
          </div>

          {!isZen && (
            <footer className="flex h-11 items-center justify-between border-t border-white/5 bg-[#17181b] px-5 text-xs text-muted-foreground">
              <div className={`flex items-center gap-3 ${footerContentClass}`}>
                <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                  {footerLeft ?? language}
                </span>
                <span>{font?.name || 'JetBrains Mono'}</span>
              </div>
              <div
                className={`text-[11px] text-muted-foreground ${footerContentClass}`}
              >
                {computedFooterRight}
              </div>
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorShell;
