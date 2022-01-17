import React from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';
import {getAppColor} from '../../helpers/ThemeHelper';
import {AppCommonPropTypes} from '../../types/AppTypes';
import {CustomStyleTypes} from '../../types/StylesTypes';

type AppScrollViewPropsTypes = ScrollViewProps & AppCommonPropTypes;

function AppScrollView(props: AppScrollViewPropsTypes): JSX.Element {
  const extraStyle: CustomStyleTypes = {};
  if (props.appColor) {
    const appColor = getAppColor(
      props.appColor,
      props.appColorOpacity,
      props.isDarkTheme,
    );
    extraStyle.backgroundColor = appColor;
  }

  return <ScrollView style={[props.style, extraStyle]} {...props} />;
}

export default AppScrollView;
