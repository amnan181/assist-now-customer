import React from 'react';
import {Image, Text, ActivityIndicator} from 'react-native';
import styles from './SplashStyle';
import logo from '../../assets/logo.png';
import {themeColors} from '../../constants/Theme';
import AppView from '../../components/appView/AppView';
import {useAppTheme} from '../../hooks/useAppTheme';

function Splash(): JSX.Element {
  const {isDarkTheme} = useAppTheme();
  return (
    <AppView
      isDarkTheme={isDarkTheme}
      appColor="background"
      style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.heading}>Idea Maker</Text>
      <ActivityIndicator size={30} color={themeColors.primary} />
    </AppView>
  );
}

export default Splash;
