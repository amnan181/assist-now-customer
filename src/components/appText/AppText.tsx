import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {
  APP_FONT_SIZE,
  themeColors,
  themeDarkColors,
} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';
import {
  TextFontSize,
  TextFontTypes,
  ThemeColorTypes,
} from '../../types/AppTypes';
import {getFontFamily} from '../../utils/AppUtils';

export type AppTextPropsTypes = TextProps & {
  fontStyle?: keyof TextFontTypes;
  fontSize?: keyof TextFontSize | number;
  textColor?: keyof ThemeColorTypes;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textColorOpacity?: number;
  marginTop?: number;
  marginBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  isDarkTheme?: boolean;
};

function AppText(props: AppTextPropsTypes): JSX.Element {
  const extraProps = {};
  const extraStyle: StyleProp<TextStyle> = {};
  if (props.fontStyle) {
    const fontFamily = getFontFamily(props.fontStyle);
    extraStyle.fontFamily = fontFamily;
  }
  if (props.textColor) {
    let textColor = props.isDarkTheme
      ? themeDarkColors[props.textColor]
      : themeColors[props.textColor];
    if (props.textColorOpacity) {
      textColor = hexToRgbA(textColor, props.textColorOpacity);
    }
    extraStyle.color = textColor;
  } else if (props.isDarkTheme) {
    extraStyle.color = themeDarkColors.text;
  } else if (!props.isDarkTheme) {
    extraStyle.color = themeColors.text;
  }

  if (props.fontSize) {
    let fontSize = APP_FONT_SIZE.h4;
    if (typeof props.fontSize === 'string') {
      fontSize = APP_FONT_SIZE[props.fontSize];
    }
    if (typeof props.fontSize === 'number') {
      fontSize = props.fontSize;
    }
    extraStyle.fontSize = fontSize;
  }
  if (props.marginTop) {
    extraStyle.marginTop = props.marginTop;
  }
  if (props.fontWeight) {
    extraStyle.fontWeight = props.fontWeight;
  }
  if (props.marginBottom) {
    extraStyle.marginBottom = props.marginBottom;
  }
  if (props.paddingHorizontal) {
    extraStyle.paddingHorizontal = props.paddingHorizontal;
  }
  if (props.paddingVertical) {
    extraStyle.paddingVertical = props.paddingVertical;
  }

  return <Text {...props} {...extraProps} style={[extraStyle, props.style]} />;
}

export default AppText;
