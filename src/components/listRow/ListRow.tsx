import React from 'react';
import {FlexStyle} from 'react-native';
import {View, ViewProps} from 'react-native';
import {CustomStyleTypes} from '../../types/StylesTypes';
import styles from './ListRowStyle';

export type ListRowPropsTypes = ViewProps & {
  flexStyle?: FlexStyle;
};

function ListRow(props: ListRowPropsTypes): JSX.Element {
  let extraStyle: CustomStyleTypes = {};
  if (props.flexStyle) {
    extraStyle = {
      ...props.flexStyle,
    };
  }
  return (
    <View
      {...props}
      style={[
        styles.container,
        props.style,
        {
          flexDirection: 'row',
        },
        extraStyle,
      ]}>
      {props.children}
    </View>
  );
}

export default ListRow;
