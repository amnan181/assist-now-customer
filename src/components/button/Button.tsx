import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {getAppColor, hexToRgbA} from '../../helpers/ThemeHelper';
import {AppCommonPropTypes} from '../../types/AppTypes';
import {CustomStyleTypes} from '../../types/StylesTypes';
import AppIcon, {AppIconPropsTypes} from '../appIcon/AppIcon';
import AppText, {AppTextPropsTypes} from '../appText/AppText';
import styles from './ButtonStyle';

type ButtonProps = {
  title?: string;
  fullWidth?: boolean;
  marginTop?: number;
  marginBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  showShadow?: boolean;
  buttonStyle?: 'outline';
  iconProps?: AppIconPropsTypes;
  textProps?: AppTextPropsTypes;
  style?: CustomStyleTypes;
} & AppCommonPropTypes &
  TouchableOpacityProps;

type TextStyleTypes = StyleProp<TextStyle>;

function Button(props: ButtonProps): JSX.Element {
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
      elevation: 15,
    };
  }
  if (props.buttonStyle) {
    if (props.buttonStyle === 'outline') {
      customStyle.backgroundColor = undefined;
      customStyle.borderWidth = 1;
      customStyle.borderColor = buttonColor;
      customTextStyle.color = buttonColor;
    }
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
  if (props.fullWidth) {
    customStyle.width = '100%';
  }
  if (props.appColor) {
    customStyle.backgroundColor = getAppColor(
      props.appColor,
      props.appColorOpacity,
      props.isDarkTheme,
    );
  }
  if (props.iconProps) {
    customStyle.flexDirection = 'row';
    if (props.title) {
      customTextStyle.marginLeft = 10;
    }
  }
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.container, customStyle, props.style]}>
      {props.iconProps && <AppIcon {...props.iconProps} />}
      {props.title && (
        <AppText style={[styles.heading, customTextStyle]} {...props.textProps}>
          {props.title}
        </AppText>
      )}
    </TouchableOpacity>
  );
}

export default Button;
