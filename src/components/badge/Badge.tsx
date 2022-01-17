import React from 'react';
import {View, TextProps, StyleProp, TextStyle} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';
import {CustomStyleTypes} from '../../types/StylesTypes';
import AppText from '../appText/AppText';
import styles from './BadgeStyle';

export type BadgePropsTypes = TextProps & {
  badgeType: 'success' | 'info' | 'danger' | 'warning';
};

function Badge(props: BadgePropsTypes): JSX.Element {
  const extraStyle: CustomStyleTypes = {};
  let text = '';
  const txtStyle: StyleProp<TextStyle> = {};
  if (props.badgeType === 'success') {
    extraStyle.backgroundColor = hexToRgbA(themeColors.success, 0.2);
    text = 'Success';
    txtStyle.color = hexToRgbA(themeColors.success, 1);
  } else if (props.badgeType === 'danger') {
    extraStyle.backgroundColor = hexToRgbA(themeColors.danger, 0.2);
    text = 'Danger';
    txtStyle.color = hexToRgbA(themeColors.danger, 1);
  } else if (props.badgeType === 'info') {
    extraStyle.backgroundColor = hexToRgbA(themeColors.info, 0.2);
    text = 'Info';
    txtStyle.color = hexToRgbA(themeColors.info, 1);
  } else if (props.badgeType === 'warning') {
    extraStyle.backgroundColor = hexToRgbA(themeColors.warning, 0.2);
    text = 'Warning';
    txtStyle.color = hexToRgbA(themeColors.warning, 1);
  }
  return (
    <View {...props} style={[styles.container, props.style, extraStyle]}>
      <AppText fontSize={'h6'} style={txtStyle}>
        {text}
      </AppText>
    </View>
  );
}

export default Badge;
