import {Theme} from '@react-navigation/native';
import {choosePlatform} from '../helpers/ThemeHelper';
import {TextFontSize, TextFontTypes, ThemeColorTypes} from '../types/AppTypes';

// It will be in hex decimals always don't change it
export const themeColors: ThemeColorTypes = {
  primary: '#FE724C',
  secondary: '#FFC529',
  textGray: '#616772',
  gray: '#808080',
  black: '#000',
  white: '#FFFFFF',

  // based on navigation
  text: '#131A38',
  notification: '#FE724C',
  background: '#FFFFFF',
  border: '#d8d8d8',
  card: '#FFFFFF',
  lightColor:'#FFFFFF',

  // Should be same for both themes
  success: '#2dce89',
  danger: '#f5365c',
  warning: '#fb6340',
  info: '#11cdef',
};

export const themeDarkColors: ThemeColorTypes = {
  primary: '#FE724C',
  secondary: '#FFC529',
  textGray: '#616772',
  gray: '#ADADB8',
  black: '#000',
  white: '#FFFFFF',

  // based on navigation
  text: '#FFFFFF',
  notification: '#FE724C',
  background: '#2D2D3A',
  border: '#272729',
  card: '#121212',
  lightColor:'#393948',

  // Should be same for both themes
  success: '#2dce89',
  danger: '#f5365c',
  warning: '#fb6340',
  info: '#11cdef',
};

export const DEFAULT_LIGHT_NAVIGATION_THEME: Theme = {
  colors: {
    background: themeColors.background,
    border: themeColors.border,
    card: themeColors.card,
    notification: themeColors.notification,
    primary: themeColors.primary,
    text: themeColors.text,
  },
  dark: false,
};

export const DEFAULT_DARK_NAVIGATION_THEME: Theme = {
  colors: {
    background: themeDarkColors.background,
    border: themeDarkColors.border,
    card: themeDarkColors.card,
    notification: themeDarkColors.notification,
    primary: themeDarkColors.primary,
    text: themeDarkColors.text,
  },
  dark: true,
};

export const FONT_FAMILY: TextFontTypes = {
  blackItalic: choosePlatform({
    ios: 'Sofia Pro Black Italic',
    android: 'Sofia-Black-Italic',
  }),
  black: choosePlatform({ios: 'Sofia Pro Black', android: 'Sofia-Black'}),
  boldItalic: choosePlatform({
    ios: 'Sofia Pro Bold Italic',
    android: 'Sofia-Bold-Italic',
  }),
  bold: choosePlatform({ios: 'Sofia Pro Bold', android: 'Sofia-Bold'}),
  extraLightItalic: choosePlatform({
    ios: 'Sofia Pro ExtraLight Italic',
    android: 'Sofia-ExtraLight-Italic',
  }),
  extraLight: choosePlatform({
    ios: 'Sofia Pro ExtraLight',
    android: 'Sofia-ExtraLight',
  }),
  lightItalic: choosePlatform({
    ios: 'Sofia Pro Light Italic',
    android: 'Sofia-Light-Italic',
  }),
  light: choosePlatform({ios: 'Sofia Pro Light', android: 'Sofia-Light'}),
  semiBold: choosePlatform({
    ios: 'Sofia Pro SemiBold',
    android: 'Sofia-SemiBold',
  }),
  medium: choosePlatform({ios: 'Sofia Pro Medium', android: 'Sofia-Medium'}),
};

export const APP_FONT_SIZE: TextFontSize = {
  h1: 32,
  h2: 24,
  h3: 18.72,
  h4: 16,
  h5: 13.28,
  h6: 10.72,
};
