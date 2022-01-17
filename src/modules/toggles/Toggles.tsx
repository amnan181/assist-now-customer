import React from 'react';
import {View} from 'react-native';
import AppText from '../../components/appText/AppText';
import AppView from '../../components/appView/AppView';
import AppToggle from '../../components/toggle/Toggle';
import {themeColors} from '../../constants/Theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import styles from './TogglesStyle';

function ToggleScreen(): JSX.Element {
  const {isDarkTheme} = useAppTheme();

  return (
    <AppView
      appColor="background"
      isDarkTheme={isDarkTheme}
      style={styles.container}>
      <AppText style={styles.heading} fontStyle="bold" fontSize={50}>
        Toggles
      </AppText>
      <AppToggle
        isDarkTheme={isDarkTheme}
        isOn={false}
        onColor={themeColors.primary}
        size="small"
      />
      <View style={styles.spacer} />
      <AppToggle
        isDarkTheme={isDarkTheme}
        isOn={true}
        onColor={themeColors.primary}
        size="small"
      />
      <View style={styles.spacer} />
      <AppToggle
        isDarkTheme={isDarkTheme}
        isOn={false}
        onColor={themeColors.primary}
        size="medium"
      />
      <View style={styles.spacer} />
      <AppToggle
        isDarkTheme={isDarkTheme}
        isOn={true}
        onColor={themeColors.primary}
        size="medium"
      />
      <View style={styles.spacer} />
      <AppToggle
        isDarkTheme={isDarkTheme}
        isOn={false}
        onColor={themeColors.primary}
        size="large"
      />
      <View style={styles.spacer} />
      <AppToggle
        isDarkTheme={isDarkTheme}
        isOn={true}
        onColor={themeColors.primary}
        size="large"
      />
    </AppView>
  );
}

export default ToggleScreen;
