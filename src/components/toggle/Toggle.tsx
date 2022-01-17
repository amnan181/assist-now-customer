import React, {useEffect, useState} from 'react';
import {ColorValue} from 'react-native';
import ToggleSwitch, {ToggleSwitchProps} from 'toggle-switch-react-native';
import {themeDarkColors} from '../../constants/Theme';
import {AppCommonPropTypes} from '../../types/AppTypes';

export type AppTogglePropTypes = ToggleSwitchProps & AppCommonPropTypes;

function AppToggle(props: AppTogglePropTypes): JSX.Element {
  const [isOn, setIsOn] = useState(props.isOn);
  useEffect(() => {
    if (isOn !== props.isOn) {
      setIsOn(props.isOn);
    }
  }, [props.isOn]);
  const extraProps: {offColor?: ColorValue} = {};
  if (props.isDarkTheme) {
    const color = themeDarkColors.lightColor;
    extraProps.offColor = color;
  }
  function onToggle(isOnSelected: boolean) {
    setIsOn(isOnSelected);
    if (props.onToggle) {
      props.onToggle(isOnSelected);
    }
  }
  return (
    <ToggleSwitch onToggle={onToggle} {...props} {...extraProps} isOn={isOn} />
  );
}

export default AppToggle;
