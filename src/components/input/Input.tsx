import React, {useState} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText, {AppTextPropsTypes} from '../appText/AppText';
import {CustomStyleTypes} from '../../types/StylesTypes';
import styles from './InputStyle';
import {themeColors, themeDarkColors} from '../../constants/Theme';
import AppIcon from '../appIcon/AppIcon';

type InputPropsTypes = TextInputProps & {
  containerStyle?: CustomStyleTypes;
  textProps?: AppTextPropsTypes;
  inputHeading?: React.ReactNode;
  marginTop?: number;
  width?: number | string;
  marginBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  isDarkTheme?: boolean;
};

function Input(props: InputPropsTypes): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const customStyle: CustomStyleTypes = {};
  if (props.marginTop) {
    customStyle.marginTop = props.marginTop;
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
  const inputCustomStyle: CustomStyleTypes = {};
  const inputStyle: StyleProp<TextStyle> = {};
  if (props.width) {
    customStyle.width = props.width;
  }
  if (isFocused) {
    inputCustomStyle.borderColor = themeColors.warning;
  }
  if (props.secureTextEntry) {
    inputCustomStyle.paddingRight = 50;
  }

  const theme = props.isDarkTheme ? themeColors : themeDarkColors;

  if (props.isDarkTheme) {
    inputCustomStyle.backgroundColor = themeDarkColors.lightColor;
    inputStyle.color = themeDarkColors.text;
  }
  else if(!props.isDarkTheme){
    inputStyle.color = themeColors.text;

  }

  function onBlur() {
    setIsFocused(false);
  }
  function onFocus() {
    setIsFocused(true);
  }

  function onShowHidePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <View style={[styles.container, props.containerStyle, customStyle]}>
      {props.inputHeading && (
        <AppText
          textColor="gray"
          fontSize={18}
          isDarkTheme={props.isDarkTheme}
          {...props.textProps}>
          {props.inputHeading}
        </AppText>
      )}
      <View style={[styles.inputContainer, inputCustomStyle]}>
        <TextInput
          onBlur={onBlur}
          onFocus={onFocus}
          style={[styles.input, inputStyle]}
          placeholderTextColor={theme.gray}
          {...props}
          secureTextEntry={showPassword}
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            onPress={onShowHidePassword}
            style={styles.rightButton}>
            <AppIcon
              type="Ionicons"
              fontSize={24}
              appColor="gray"
              name={showPassword ? 'eye' : 'eye-off'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default Input;
