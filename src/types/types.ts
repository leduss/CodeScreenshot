export interface Background {
  name: string;
  background: string;
  gradient?: boolean;
}

export type Backgrounds = Background[];

export interface Rounded {
  name: string;
  value: string;
}

export type RoundedOption = Rounded[];

export interface FontSize {
  name: string;
  value: string;
  px: number;
}

export type FontSizeOption = FontSize[];

export interface FontStyle {
  name: string;
  link: string;
}

export interface Font {
  name: string;
  src: string;
}
