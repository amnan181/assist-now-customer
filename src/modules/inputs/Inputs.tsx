import React from 'react';
import AppScrollView from '../../components/appScrollView/AppScrollView';
import AppText from '../../components/appText/AppText';
import AppView from '../../components/appView/AppView';
import Input from '../../components/input/Input';
import {useAppTheme} from '../../hooks/useAppTheme';
import styles from './InputsStyle';

function InputScreen(): JSX.Element {
  const {isDarkTheme} = useAppTheme();
  return (
    <AppScrollView isDarkTheme={isDarkTheme} appColor="background">
      <AppView style={styles.container}>
        <AppText style={styles.heading} fontStyle="bold" fontSize={50}>
          Text Inputs
        </AppText>
        <Input
          isDarkTheme={isDarkTheme}
          inputHeading="E-mail"
          placeholder="Your email or phone"
        />
        <Input
          isDarkTheme={isDarkTheme}
          inputHeading="Password"
          secureTextEntry
          placeholder="Password"
        />
        <Input
          isDarkTheme={isDarkTheme}
          inputHeading="Password"
          secureTextEntry
          placeholder="Password"
        />
      </AppView>
    </AppScrollView>
  );
}

export default InputScreen;
