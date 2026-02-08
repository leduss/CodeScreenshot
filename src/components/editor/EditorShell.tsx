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
  hideFooterDuringCapture?: boolean;
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
  hideFooterDuringCapture = false,
}: EditorShellProps) => {
  const {
    font,
    zenMode,
    watermarkText,
    watermarkPosition,
    isPro,
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
  const headerActionClasses = hideHeaderActionsDuringCapture
    ? 'pointer-events-none opacity-0'
    : 'opacity-100';
  const footerActionClasses = hideFooterDuringCapture
    ? 'pointer-events-none opacity-0'
    : 'opacity-100';

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
            <header className="flex h-12 items-center justify-between border-b border-white/5 bg-[#17181b] px-5">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="size-3 rounded-full bg-[hsl(8_85%_55%)]" />
                <span className="size-3 rounded-full bg-[hsl(45_90%_50%)]" />
                <span className="size-3 rounded-full bg-[hsl(140_60%_45%)]" />
              </div>

              <div className="ml-10 inline-flex h-10 w-auto max-w-max items-center gap-2 border-t border-violet-500 bg-white/10 px-3 backdrop-blur-sm">
                <div className="flex size-5 shrink-0 items-center justify-center">
                  <span style={{ color: titleTextColor }}>
                    {getLanguageIcon(language)}
                  </span>
                </div>
                <input
                  className="placeholder:text-inherit/50 h-full w-auto min-w-[100px] border-none bg-transparent text-sm text-inherit outline-none"
                  style={{ color: titleTextColor }}
                  placeholder="nom fichier"
                  value={getFullFilename()}
                  onChange={(e) => onTitleChange?.(e.target.value)}
                  onFocus={() => setIsEditing(true)}
                  onBlur={() => setIsEditing(false)}
                />
              </div>

              <div
                className={`flex items-center gap-2 text-muted-foreground transition-opacity ${headerActionClasses}`}
              >
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
          </div>

          {!isZen && (
            <footer
              className={`flex h-11 items-center justify-between border-t border-white/5 bg-[#17181b] px-5 text-xs text-muted-foreground transition-opacity ${footerActionClasses}`}
            >
              <div className="flex items-center gap-3">
                <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                  {footerLeft ?? language}
                </span>
                <span>{font?.name || 'JetBrains Mono'}</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
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
