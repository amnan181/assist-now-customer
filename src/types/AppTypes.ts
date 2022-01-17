export type ToastShownTypes = {
  message: string;
  title?: string;
  type?: 'success' | 'info' | 'error'
};

export type AppColorPropType = {
  appColor?: keyof ThemeColorTypes;
  appColorOpacity?: number;
};

export type AppCommonPropTypes = AppColorPropType & {
  isDarkTheme?: boolean;
};

export interface TextFontTypes {
  blackItalic: string;
  black: string;
  boldItalic: string;
  bold: string;
  extraLightItalic: string;
  extraLight: string;
  lightItalic: string;
  light: string;
  semiBold: string;
  medium: string;
}

export interface ThemeColorTypes {
  primary: string;
  secondary: string;
  text: string;
  textGray: string;
  gray: string;
  black: string;
  white: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  notification: string;
  background: string;
  border: string;
  card: string;
  lightColor: string;
}

export interface TextFontSize {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
}
