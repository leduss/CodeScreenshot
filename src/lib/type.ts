export type Backgrounds = Background[];

export interface Background {
  name: string;
    background: string;
    gradient?: boolean;
}

export type RoundedOption = Rounded[];

export interface Rounded {
  value: string;
  name: string;
}

export type FontSizeOption = FontSize[];

export interface FontSize {
  value: string;
    name: string;
    px: number;
}

export type fontStyleOption = FontStyle[];

export interface FontStyle {
  name: string;
  link: string;
}

export type Fonts = Font[];

export interface Font {
  name: string;
  src: string;
}

