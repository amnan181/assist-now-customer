import React from 'react';
import {FlexStyle, View} from 'react-native';
import {ViewProps} from 'react-native';
import {getAppColor} from '../../helpers/ThemeHelper';
import {AppCommonPropTypes} from '../../types/AppTypes';
import {CustomStyleTypes} from '../../types/StylesTypes';
import AppIcon, {AppIconPropsTypes} from '../appIcon/AppIcon';
import AppText, {AppTextPropsTypes} from '../appText/AppText';
import ListRow from '../listRow/ListRow';
import styles from './ListStyle';

export type ListPropsTypes = ViewProps &
  AppCommonPropTypes & {
    flexStyle?: FlexStyle;
    iconProps?: AppIconPropsTypes;
    textProps?: AppTextPropsTypes;
    fullWidth?: string | number;
    heading?: string;
  };

function AppList(props: ListPropsTypes): JSX.Element {
  const extraStyle: CustomStyleTypes = {};
  if (props.appColor) {
    const appColor = getAppColor(
      props.appColor,
      props.appColorOpacity,
      props.isDarkTheme,
    );
    extraStyle.backgroundColor = appColor;
  }
  if (props.fullWidth) {
    extraStyle.width = '100%';
  }
  return (
    <ListRow flexStyle={props.flexStyle} style={[styles.container, extraStyle]}>
      <View style={styles.leftView}>
        <AppIcon
          size={28}
          isDarkTheme={props.isDarkTheme}
          type="MaterialCommunityIcons"
          name="face-profile"
          {...props.iconProps}
        />
      </View>
      <AppText isDarkTheme={props.isDarkTheme} fontStyle="medium" fontSize="h3" {...props.textProps}>
        {props.heading}
      </AppText>
    </ListRow>
  );
}

export default AppList;
