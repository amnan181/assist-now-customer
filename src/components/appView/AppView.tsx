import React from 'react';
import {View, ViewProps} from 'react-native';
import {getAppColor} from '../../helpers/ThemeHelper';
import {ThemeColorTypes} from '../../types/AppTypes';
import {CustomStyleTypes} from '../../types/StylesTypes';

type AppViewPropsTypes = ViewProps & {
  appColor?: keyof ThemeColorTypes;
  appColorOpacity?: number;
  isDarkTheme?: boolean;
};

function AppView(props: AppViewPropsTypes): JSX.Element {
  const extraStyle: CustomStyleTypes = {};
  if (props.appColor) {
    const appColor = getAppColor(
      props.appColor,
      props.appColorOpacity,
      props.isDarkTheme,
    );
    extraStyle.backgroundColor = appColor;
  }

  return <View {...props} style={[props.style, extraStyle]}  />;
}

export default AppView;
