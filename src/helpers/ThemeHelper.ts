import {Platform} from 'react-native';
import {themeColors, themeDarkColors} from '../constants/Theme';
import {ThemeColorTypes} from '../types/AppTypes';

/* eslint-disable no-bitwise */
export function hexToRgbA(hex: string, opacity: number): string {
  let c: string | string[];
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      `,${opacity})`
    );
  }
  throw new Error(`Bad Hex ${hex} with ${opacity}`);
}

type PlatformChooseType = {
  android: string;
  ios: string;
};

export function choosePlatform(params: PlatformChooseType): string {
  const select = Platform.select(params);
  if (select) {
    return select;
  }
  return '';
}

export function getAppColor(
  appColor: keyof ThemeColorTypes,
  appColorOpacity?: number,
  isDarkTheme?: boolean,
): string {
  let generatedColor = isDarkTheme
    ? themeDarkColors[appColor]
    : themeColors[appColor];
  if (appColorOpacity) {
    generatedColor = hexToRgbA(generatedColor, appColorOpacity);
  }
  return generatedColor;
}
