import React, { createContext, useContext, useState } from 'react';
import { backgroundOption } from '@/lib/backgroundOption';
import { Background, FontSize, FontStyle, Rounded } from '@/lib/type';
import { roundedOption } from '@/lib/roundedOption';
import { fontSizeOptions } from '@/lib/fontSizeOption';
import { OsEnum } from '@/lib/enum';
import { fontStyleOptions } from '@/lib/fontStyleOption';

type MyContextType = {
  theme: Background | undefined;
  updateTheme: (name: string) => void;
  padding: number;
  updatePadding: (value: number) => void;
  rounded: Rounded | undefined;
  indexRounded: number;
  updateRounded: (value: number) => void;
  fontSize: FontSize | undefined;
  indexFontSize: number;
  updateFontSize: (value: number) => void;
  os: OsEnum.mac | OsEnum.none;
  updateOs: (value: string) => void;
  fontStyle: FontStyle | undefined;
  updateFontStyle: (value: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const Context = createContext<MyContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Background | undefined>(
    backgroundOption[0]
  );
  const [padding, setPadding] = useState<number>(16);
  const [indexRounded, setIndexRounded] = useState(1);
  const [rounded, setRounded] = useState<Rounded | undefined>(
    roundedOption[indexRounded]
  );
  const [indexFontSize, setIndexFontSize] = useState(2);
  const [fontSize, setFontSize] = useState<FontSize | undefined>(
    fontSizeOptions[indexFontSize]
  );
  const [os, setOs] = useState<OsEnum.mac | OsEnum.none>(OsEnum.mac);
  const [fontStyle, setFontStyle] = useState<FontStyle | undefined>(
    fontStyleOptions[0]
  );
  const [darkMode, setDarkMode] = useState(false);

  const updateTheme = (value: string) => {
    const foundTheme = backgroundOption.find(
      (background) => background.name === value
    );
    if (foundTheme) {
      setTheme(() => foundTheme);
    }
  };

  const updatePadding = (value: number) => {
    setPadding(() => value);
  };

  const updateRounded = (value: number) => {
    setIndexRounded(() => value);
    setRounded(() => roundedOption[value]);
  };

  const updateOs = (value: string) => {
    setOs(() => value as OsEnum.mac | OsEnum.none);
  };

  const updateFontSize = (value: number) => {
    setFontSize(() => fontSizeOptions[value]);
    setIndexFontSize(() => value);
  };

  const updateFontStyle = (value: string) => {
    const foundFontStyle = fontStyleOptions.find(
      (fontStyle) => fontStyle.name === value
    );
    if (foundFontStyle) {
      setFontStyle(foundFontStyle);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <Context.Provider
      value={{
        theme,
        updateTheme,
        padding,
        updatePadding,
        rounded,
        updateRounded,
        fontSize,
        updateFontSize,
        os,
        updateOs,
        fontStyle,
        updateFontStyle,
        indexFontSize,
        indexRounded,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      'useMyContext doit être utilisé dans un composant enveloppé avec MyContextProvider'
    );
  }
  return context;
};
