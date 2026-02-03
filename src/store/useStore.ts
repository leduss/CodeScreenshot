import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { backgroundOption } from '@/lib/backgroundOption';
import { roundedOption } from '@/lib/roundedOption';
import { fontSizeOptions } from '@/lib/fontSizeOption';
import { OsEnum } from '@/lib/enum';
import { fontStyleOptions } from '@/lib/fontStyleOption';
import { Background, Font, FontSize, FontStyle, Rounded } from '@/lib/type';
import { fonts } from '@/lib/dataOption';
import { Locale } from '@/lib/translations';

export interface CustomTheme {
  id: string;
  name: string;
  background: string;
  textColor: string;
  lineNumbersColor: string;
  highlightColor: string;
}

interface EditorState {
  theme: Background | undefined;
  syntaxTheme: string;
  padding: number;
  rounded: Rounded | undefined;
  indexRounded: number;
  fontSize: FontSize | undefined;
  indexFontSize: number;
  os: OsEnum.mac | OsEnum.none;
  fontStyle: FontStyle | undefined;
  darkMode: boolean;
  font: Font | undefined;
  fontWeight: number;
  isLoader: boolean;
  showLineNumbers: boolean;
  highlightedLines: number[];
  locale: Locale;
  isFullscreen: boolean;
  customThemes: CustomTheme[];
  activeCustomTheme: CustomTheme | null;
  language: string;

  // Actions
  setTheme: (theme: string) => void;
  setSyntaxTheme: (theme: string) => void;
  setPadding: (padding: number) => void;
  setRounded: (index: number) => void;
  setOs: (os: string) => void;
  setFontSize: (index: number) => void;
  setFontStyle: (style: string) => void;
  toggleDarkMode: () => void;
  setFont: (font: string) => void;
  setFontWeight: (weight: number) => void;
  setIsLoader: (loading: boolean) => void;
  setShowLineNumbers: (show: boolean) => void;
  toggleLineHighlight: (line: number) => void;
  setHighlightedLines: (lines: number[]) => void;
  setLocale: (locale: Locale) => void;
  toggleFullscreen: () => void;
  addCustomTheme: (theme: CustomTheme) => void;
  removeCustomTheme: (id: string) => void;
  setActiveCustomTheme: (theme: CustomTheme | null) => void;
  setLanguage: (language: string) => void;
  reset: () => void;
}

const initialState = {
  theme: backgroundOption[0],
  syntaxTheme: 'dracula',
  padding: 0,
  rounded: roundedOption[0],
  indexRounded: 0,
  fontSize: fontSizeOptions[2],
  indexFontSize: 2,
  os: OsEnum.mac,
  fontStyle: fontStyleOptions[0],
  darkMode: false,
  font: fonts[0],
  fontWeight: 400,
  isLoader: false,
  showLineNumbers: true,
  highlightedLines: [],
  locale: 'fr' as Locale,
  isFullscreen: false,
  customThemes: [],
  activeCustomTheme: null,
  language: 'typescript',
};

export const useStore = create<EditorState>()(
  persist(
    (set) => ({
      ...initialState,

      setTheme: (theme: string) =>
        set({
          theme: backgroundOption.find((bg) => bg.name === theme),
        }),

      setSyntaxTheme: (theme: string) => set({ syntaxTheme: theme }),

      setPadding: (padding: number) => set({ padding }),

      setRounded: (index: number) =>
        set({
          indexRounded: index,
          rounded: roundedOption[index],
        }),

      setOs: (os: string) => set({ os: os as OsEnum.mac | OsEnum.none }),

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

      reset: () => set(initialState),
    }),
    {
      name: 'code-screenshot-storage',
      partialize: (state) => ({
        theme: state.theme,
        syntaxTheme: state.syntaxTheme,
        padding: state.padding,
        rounded: state.rounded,
        indexRounded: state.indexRounded,
        fontSize: state.fontSize,
        indexFontSize: state.indexFontSize,
        os: state.os,
        fontStyle: state.fontStyle,
        darkMode: state.darkMode,
        font: state.font,
        fontWeight: state.fontWeight,
        showLineNumbers: state.showLineNumbers,
        highlightedLines: state.highlightedLines,
        locale: state.locale,
      }),
    }
  )
);
