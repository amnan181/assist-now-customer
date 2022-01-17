/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/navigation/Navigation';
import store from './src/config/Store';
import OneSignal from 'react-native-onesignal';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'react-native';
import { themeColors } from './src/constants/Theme';

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId('227fac7d-5f6f-4347-bf56-b880e3646599');
//END OneSignal Init Code

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={themeColors.primary}/>
      <MainNavigation />
      <Toast />
    </Provider>
  );
};

export default App;
