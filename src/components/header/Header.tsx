import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';
import {CustomStyleTypes} from '../../types/StylesTypes';
import AppIcon, {AppIconPropsTypes} from '../appIcon/AppIcon';
import AppText, {AppTextPropsTypes} from '../appText/AppText';
import styles from './HeaderStyle';

type HeaderPropType = {
  title?: string;
  backgroundColor?: string;
  marginTop?: number;
  marginBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  showShadow?: boolean;
  iconProps?: AppIconPropsTypes;
  textProps?: AppTextPropsTypes;
  style?: CustomStyleTypes;
} & TouchableOpacityProps;

type TextStyleTypes = StyleProp<TextStyle>;

function Header(props: HeaderPropType): JSX.Element {
  let customStyle: CustomStyleTypes = {};
  const customTextStyle: TextStyleTypes = {};
  const buttonColor = hexToRgbA(themeColors.primary, 1);
  if (props.marginTop) {
    customStyle.marginTop = props.marginTop;
  }
  if (props.showShadow) {
    customStyle = {
      ...customStyle,
      shadowColor: buttonColor,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5.84,

      elevation: 5,
    };
  }
  if (props.borderRadius) {
    customStyle.borderRadius = props.borderRadius;
  }
  if (props.marginBottom) {
    customStyle.marginBottom = props.marginBottom;
  }
  if (props.paddingHorizontal) {
    customStyle.paddingHorizontal = props.paddingHorizontal;
  }
  if (props.paddingVertical) {
    customStyle.paddingVertical = props.paddingVertical;
  }
  if (props.backgroundColor) {
    customStyle.backgroundColor = props.backgroundColor;
  }
  if (props.iconProps) {
    customStyle.flexDirection = 'row';
    if (props.title) {
      customTextStyle.marginLeft = 10;
    }
  }

  return (
    <View style={[styles.container, customStyle, props.style]}>
      <TouchableOpacity>
        <AppIcon name='back-arrow' isButtonType {...props.iconProps} />
      </TouchableOpacity>

      {props.title && (
        <AppText style={[styles.heading, customTextStyle]} {...props.textProps}>
          {props.title}
        </AppText>
      )}
    </View>
  );
}

export default Header;
