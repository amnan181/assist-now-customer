import React, {useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';
import {ThemeColorTypes} from '../../types/AppTypes';
import styles from './AppStarStyle';

declare type AnimationConfig = {
  easing?: (value: number) => number;
  duration?: number;
  delay?: number;
  scale?: number;
};

export type AppStarPropsTypes = {
  appColor?: keyof ThemeColorTypes;
  appColorOpacity?: number;
  rating: number;
  disabled?: boolean;
  minRating?: number;
  color?: string;
  emptyColor?: string;
  maxStars?: number;
  starSize?: number;
  enableHalfStar?: boolean;
  enableSwiping?: boolean;
  style?: StyleProp<ViewStyle>;
  starStyle?: StyleProp<ViewStyle>;
  animationConfig?: AnimationConfig;
};

type ExtraAppStarPropsTypes = {
  color?: string;
};

function AppStar(props: AppStarPropsTypes): JSX.Element {
  const [rating, setRating] = useState(props.rating || 2);
  const extraProps: ExtraAppStarPropsTypes = {};
  if (props.appColor) {
    let textColor = themeColors[props.appColor];
    if (props.appColorOpacity) {
      textColor = hexToRgbA(textColor, props.appColorOpacity);
    }
    extraProps.color = textColor;
  }
  function onChange(ratings: number) {
    setRating(ratings);
  }
  return (
    <View>
      <StarRating
        onChange={onChange}
        {...props}
        {...extraProps}
        rating={rating}
      />
      {props.disabled && <View style={styles.disabledView} />}
    </View>
  );
}

export default AppStar;
