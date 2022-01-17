/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {APP_FONT_SIZE} from '../../constants/Theme';
import {AppColorPropType, TextFontSize} from '../../types/AppTypes';
import styles from './AppIconStyle';
import {CustomStyleTypes} from '../../types/StylesTypes';
import {getAppColor} from '../../helpers/ThemeHelper';

export type AppIconPropsTypes = IconProps &
  AppColorPropType & {
    fontSize?: keyof TextFontSize | number;
    isButtonType?: boolean;
    backgroundColor?: string;
    isDarkTheme?: boolean;
    type?:
      | 'AntDesign'
      | 'Entypo'
      | 'EvilIcons'
      | 'Feather'
      | 'FontAwesome'
      | 'FontAwesome5'
      | 'FontAwesome5Pro'
      | 'MaterialCommunityIcons'
      | 'MaterialIcons'
      | 'Octicons'
      | 'Ionicons';
  };

type ExtraIconTypeProp = {
  color?: string;
};

function AppIcon(props: AppIconPropsTypes): JSX.Element {
  const extraProps: ExtraIconTypeProp = {};
  const extraStyle: StyleProp<TextStyle> = {};
  if (props.appColor) {
    extraProps.color = getAppColor(
      props.appColor,
      props.appColorOpacity,
      props.isDarkTheme,
    );
  }
  else if(props.isDarkTheme){
    extraProps.color = getAppColor(
      'text',
      props.appColorOpacity,
      props.isDarkTheme,
    );
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

  let Icon = FontAwesome;
  switch (props.type) {
    case 'AntDesign':
      Icon = AntDesign;
      break;
    case 'Entypo':
      Icon = Entypo;
      break;

    case 'EvilIcons':
      Icon = EvilIcons;
      break;
    case 'Feather':
      Icon = Feather;
      break;
    case 'FontAwesome':
      Icon = FontAwesome;
      break;
    case 'Ionicons':
      Icon = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      Icon = MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      Icon = MaterialIcons;
      break;
    case 'Octicons':
      Icon = Octicons;
      break;
    default:
      break;
  }

  if (props.isButtonType) {
    const customStyle: CustomStyleTypes = {};
    if (props.backgroundColor) {
      customStyle.backgroundColor = props.backgroundColor;
    }
    return (
      <View style={[styles.container, customStyle]}>
        <Icon {...props} {...extraProps} style={[props.style, extraStyle]} />
      </View>
    );
  }

  return <Icon {...props} {...extraProps} style={[props.style, extraStyle]} />;
}

export default AppIcon;
