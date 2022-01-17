import {FONT_FAMILY} from '../constants/Theme';
import {TextFontTypes} from '../types/AppTypes';

export function getFontFamily(familyStyle: keyof TextFontTypes): string {
  const fontFamily = FONT_FAMILY?.[familyStyle] || FONT_FAMILY.black;
  return fontFamily;
}
