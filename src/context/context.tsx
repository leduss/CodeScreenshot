import React, { createContext, useContext, useReducer } from 'react';
import { backgroundOption } from '@/lib/backgroundOption';
import { roundedOption } from '@/lib/roundedOption';
import { fontSizeOptions } from '@/lib/fontSizeOption';
import { OsEnum } from '@/lib/enum';
import { fontStyleOptions } from '@/lib/fontStyleOption';
import { Background, Font, FontSize, FontStyle, Rounded } from '@/lib/type';
import { fonts } from '@/lib/dataOption';

type State = {
  theme: Background | undefined;
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
};

type Action =
  | { type: 'SET_THEME'; payload: string }
  | { type: 'SET_PADDING'; payload: number }
  | { type: 'SET_ROUNDED'; payload: number }
  | { type: 'SET_OS'; payload: string }
  | { type: 'SET_FONT_SIZE'; payload: number }
  | { type: 'SET_FONT_STYLE'; payload: string }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_FONT'; payload: string }
  | { type: 'SET_FONT_WEIGHT'; payload: number };

const initialState: State = {
  theme: backgroundOption[0],
  padding: 32,
  rounded: roundedOption[1],
  indexRounded: 1,
  fontSize: fontSizeOptions[2],
  indexFontSize: 2,
  os: OsEnum.mac,
  fontStyle: fontStyleOptions[0],
  darkMode: false,
  font: fonts[0],
  fontWeight: 400,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_THEME':
      const foundTheme = backgroundOption.find(
        (bg) => bg.name === action.payload
      );
      return { ...state, theme: foundTheme };
    case 'SET_PADDING':
      return { ...state, padding: action.payload };
    case 'SET_ROUNDED':
      return {
        ...state,
        indexRounded: action.payload,
        rounded: roundedOption[action.payload],
      };
    case 'SET_OS':
      return { ...state, os: action.payload as OsEnum.mac | OsEnum.none };
    case 'SET_FONT_SIZE':
      return {
        ...state,
        indexFontSize: action.payload,
        fontSize: fontSizeOptions[action.payload],
      };
    case 'SET_FONT_STYLE':
      const foundFontStyle = fontStyleOptions.find(
        (style) => style.name === action.payload
      );
      return { ...state, fontStyle: foundFontStyle };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_FONT':
      const foundFont = fonts.find((font) => font.name === action.payload);
      return { ...state, font: foundFont };
    case 'SET_FONT_WEIGHT':
      return { ...state, fontWeight: action.payload };
    default:
      return state;
  }
};

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const MyContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): ContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error(
      'useMyContext doit être utilisé dans un composant enveloppé avec MyContextProvider'
    );
  }
  return context;
};
