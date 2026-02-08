import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { roundedOption, fontSizeOptions, fontStyleOptions } from '@/constants';
import { Font, FontSize, FontStyle, Rounded } from '@/types';
import { fonts, type Locale } from '@/data';
import {
  persistExportsUsed,
  readStoredExportsUsed,
} from '@/utils/export-limit-storage';

export interface CustomTheme {
  id: string;
  name: string;
  background: string;
  textColor: string;
  lineNumbersColor: string;
  highlightColor: string;
}

interface EditorState {
  syntaxTheme: string;
  rounded: Rounded | undefined;
  indexRounded: number;
  fontSize: FontSize | undefined;
  indexFontSize: number;
  fontStyle: FontStyle | undefined;
  darkMode: boolean;
  font: Font | undefined;
  fontWeight: number;
  isLoader: boolean;
  showLineNumbers: boolean;
  highlightedLines: number[];
  showZebra: boolean;
  showFoldGutter: boolean;
  showActiveLine: boolean;
  showSelectionMatches: boolean;
  showTrailingWhitespace: boolean;
  showSearch: boolean;
  zenMode: boolean;
  lineHeight: number;
  letterSpacing: number;
  watermarkText: string;
  watermarkPosition: string;
  snippetTitle: string;
  snippetDescription: string;
  locale: Locale;
  isFullscreen: boolean;
  customThemes: CustomTheme[];
  activeCustomTheme: CustomTheme | null;
  language: string;
  exportFormat: 'png' | 'jpg';
  exportQuality: number;
  exportWidth: number;
  exportHeight: number;
  exportLockRatio: boolean;
  isPro: boolean;
  exportsUsed: number;
  layoutPreset: 'centered' | 'full' | 'ratio';

  // Actions
  setSyntaxTheme: (theme: string) => void;
  setRounded: (index: number) => void;
  setFontSize: (index: number) => void;
  setFontStyle: (style: string) => void;
  toggleDarkMode: () => void;
  setFont: (font: string) => void;
  setFontWeight: (weight: number) => void;
  setIsLoader: (loading: boolean) => void;
  setShowLineNumbers: (show: boolean) => void;
  setShowZebra: (show: boolean) => void;
  setShowFoldGutter: (show: boolean) => void;
  setShowActiveLine: (show: boolean) => void;
  setShowSelectionMatches: (show: boolean) => void;
  setShowTrailingWhitespace: (show: boolean) => void;
  setShowSearch: (show: boolean) => void;
  setZenMode: (enabled: boolean) => void;
  setLineHeight: (value: number) => void;
  setLetterSpacing: (value: number) => void;
  setWatermarkText: (value: string) => void;
  setWatermarkPosition: (value: string) => void;
  setSnippetTitle: (value: string) => void;
  setSnippetDescription: (value: string) => void;
  setExportFormat: (value: 'png' | 'jpg') => void;
  setExportQuality: (value: number) => void;
  setExportWidth: (value: number) => void;
  setExportHeight: (value: number) => void;
  setExportLockRatio: (value: boolean) => void;
  setIsPro: (value: boolean) => void;
  setExportsUsed: (value: number) => void;
  syncExportsUsed: () => { prev: number; next: number };
  incrementExportsUsed: () => void;
  resetExportsUsed: () => void;
  toggleLineHighlight: (line: number) => void;
  setHighlightedLines: (lines: number[]) => void;
  setLocale: (locale: Locale) => void;
  toggleFullscreen: () => void;
  addCustomTheme: (theme: CustomTheme) => void;
  removeCustomTheme: (id: string) => void;
  setActiveCustomTheme: (theme: CustomTheme | null) => void;
  setLanguage: (language: string) => void;
  reset: () => void;
  setLayoutPreset: (preset: 'centered' | 'full' | 'ratio') => void;
}

const initialState = {
  syntaxTheme: 'console-dark',
  padding: 0,
  rounded: roundedOption[0],
  indexRounded: 0,
  fontSize: fontSizeOptions[2],
  indexFontSize: 2,
  fontStyle: fontStyleOptions[0],
  darkMode: false,
  font: fonts.find((f) => f.name === 'Input') ?? fonts[0],
  fontWeight: 400,
  isLoader: false,
  showLineNumbers: true,
  highlightedLines: [],
  showZebra: false,
  showFoldGutter: true,
  showActiveLine: true,
  showSelectionMatches: true,
  showTrailingWhitespace: false,
  showSearch: false,
  zenMode: false,
  lineHeight: 1.6,
  letterSpacing: 0,
  watermarkText: '',
  watermarkPosition: 'bottom-right',
  snippetTitle: '',
  snippetDescription: '',
  exportFormat: 'png' as 'png' | 'jpg',
  exportQuality: 90,
  exportWidth: 1200,
  exportHeight: 800,
  exportLockRatio: true,
  locale: 'fr' as Locale,
  isFullscreen: false,
  customThemes: [],
  activeCustomTheme: null,
  language: 'typescript',
  isPro: false,
  exportsUsed: 0,
  layoutPreset: 'centered',
};

export const useStore = create<EditorState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setSyntaxTheme: (theme: string) => set({ syntaxTheme: theme }),

      setRounded: (index: number) =>
        set({
          indexRounded: index,
          rounded: roundedOption[index],
        }),

      setFontSize: (index: number) =>
        set({
          indexFontSize: index,
          fontSize: fontSizeOptions[index],
        }),

      setFontStyle: (style: string) =>
        set({
          fontStyle: fontStyleOptions.find((s) => s.name === style),
        }),

      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      setFont: (font: string) =>
        set({
          font: fonts.find((f) => f.name === font),
        }),

      setFontWeight: (weight: number) => set({ fontWeight: weight }),

      setIsLoader: (loading: boolean) => set({ isLoader: loading }),

      setShowLineNumbers: (show: boolean) => set({ showLineNumbers: show }),

      setShowZebra: (show: boolean) => set({ showZebra: show }),

      setShowFoldGutter: (show: boolean) => set({ showFoldGutter: show }),

      setShowActiveLine: (show: boolean) => set({ showActiveLine: show }),

      setShowSelectionMatches: (show: boolean) =>
        set({ showSelectionMatches: show }),

      setShowTrailingWhitespace: (show: boolean) =>
        set({ showTrailingWhitespace: show }),

      setShowSearch: (show: boolean) =>
        set((state) => ({ showSearch: state.isPro ? show : false })),

      setZenMode: (enabled: boolean) => set({ zenMode: enabled }),

      setLineHeight: (value: number) => set({ lineHeight: value }),

      setLetterSpacing: (value: number) => set({ letterSpacing: value }),

      setWatermarkText: (value: string) => set({ watermarkText: value }),

      setWatermarkPosition: (value: string) =>
        set({ watermarkPosition: value }),

      setSnippetTitle: (value: string) => set({ snippetTitle: value }),

      setSnippetDescription: (value: string) =>
        set({ snippetDescription: value }),

      setExportFormat: (value: 'png' | 'jpg') => set({ exportFormat: value }),

      setExportQuality: (value) => set({ exportQuality: value }),

      setExportWidth: (value) => set({ exportWidth: value }),

      setExportHeight: (value) => set({ exportHeight: value }),

      setExportLockRatio: (value) => set({ exportLockRatio: value }),

      setIsPro: (value: boolean) =>
        set((state) => ({
          isPro: value,
          showSearch: value ? state.showSearch : false,
        })),
      setExportsUsed: (value: number) => {
        persistExportsUsed(value);
        set({ exportsUsed: value });
      },
      incrementExportsUsed: () =>
        set((state) => {
          const next = state.exportsUsed + 1;
          persistExportsUsed(next);
          return { exportsUsed: next };
        }),
      resetExportsUsed: () => {
        persistExportsUsed(0);
        set({ exportsUsed: 0 });
      },
      syncExportsUsed: () => {
        const persisted = readStoredExportsUsed();
        let prev = 0;
        set((state) => {
          prev = state.exportsUsed;
          return { exportsUsed: persisted };
        });
        return { prev, next: persisted };
      },

      toggleLineHighlight: (line: number) =>
        set((state) => {
          const lines = state.highlightedLines.includes(line)
            ? state.highlightedLines.filter((l) => l !== line)
            : [...state.highlightedLines, line];
          return { highlightedLines: lines };
        }),

      setHighlightedLines: (lines: number[]) =>
        set({ highlightedLines: lines }),

      setLocale: (locale: Locale) => set({ locale }),

      toggleFullscreen: () =>
        set((state) => ({ isFullscreen: !state.isFullscreen })),

      addCustomTheme: (theme: CustomTheme) =>
        set((state) => ({ customThemes: [...state.customThemes, theme] })),

      removeCustomTheme: (id: string) =>
        set((state) => ({
          customThemes: state.customThemes.filter((t) => t.id !== id),
          activeCustomTheme:
            state.activeCustomTheme?.id === id ? null : state.activeCustomTheme,
        })),

      setActiveCustomTheme: (theme: CustomTheme | null) =>
        set({ activeCustomTheme: theme }),

      setLanguage: (language: string) => set({ language }),
      setLayoutPreset: (preset: 'centered' | 'full' | 'ratio') =>
        set({ layoutPreset: preset }),

      reset: () => set(initialState),
    }),
    {
      name: 'code-screenshot-storage',
      partialize: (state) => ({
        syntaxTheme: state.syntaxTheme,
        rounded: state.rounded,
        indexRounded: state.indexRounded,
        fontSize: state.fontSize,
        indexFontSize: state.indexFontSize,
        fontStyle: state.fontStyle,
        darkMode: state.darkMode,
        font: state.font,
        fontWeight: state.fontWeight,
        showLineNumbers: state.showLineNumbers,
        highlightedLines: state.highlightedLines,
        showZebra: state.showZebra,
        showFoldGutter: state.showFoldGutter,
        showActiveLine: state.showActiveLine,
        showSelectionMatches: state.showSelectionMatches,
        showTrailingWhitespace: state.showTrailingWhitespace,
        showSearch: state.showSearch,
        zenMode: state.zenMode,
        lineHeight: state.lineHeight,
        letterSpacing: state.letterSpacing,
        watermarkText: state.watermarkText,
        watermarkPosition: state.watermarkPosition,
        snippetTitle: state.snippetTitle,
        snippetDescription: state.snippetDescription,
        exportFormat: state.exportFormat,
        exportQuality: state.exportQuality,
        exportWidth: state.exportWidth,
        exportHeight: state.exportHeight,
        exportLockRatio: state.exportLockRatio,
        locale: state.locale,
        isPro: state.isPro,
        exportsUsed: state.exportsUsed,
      }),
    }
  )
);
