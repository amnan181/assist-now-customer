import React from 'react';
import {Text, Image} from 'react-native';
import AppView from '../../components/appView/AppView';
import styles from './HomeStyle';
import logo from '../../assets/logo.png';
import {useAppTheme} from '../../hooks/useAppTheme';

function Home(): JSX.Element {
  const {isDarkTheme} = useAppTheme();

  return (
    <AppView
      isDarkTheme={isDarkTheme}
      appColor="background"
      style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.heading}>Idea Maker</Text>
    </AppView>
  );
}

export default Home;
