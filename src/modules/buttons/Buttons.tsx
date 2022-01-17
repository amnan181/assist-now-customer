import React from 'react';
import {View} from 'react-native';
import AppText from '../../components/appText/AppText';
import AppView from '../../components/appView/AppView';
import Button from '../../components/button/Button';
import {themeColors} from '../../constants/Theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import styles from './ButtonsStyle';

function ButtonScreen(): JSX.Element {
  const {isDarkTheme} = useAppTheme();
  return (
    <AppView
      appColor="background"
      isDarkTheme={isDarkTheme}
      style={styles.container}>
      <AppText style={styles.heading} fontStyle="bold" fontSize={50}>
        Buttons
      </AppText>
      <Button marginBottom={20} showShadow borderRadius={30} title="SIGN UP" />
      <Button
        buttonStyle="outline"
        borderRadius={30}
        title="SIGN UP"
        isDarkTheme={isDarkTheme}
        marginBottom={20}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Button
          buttonStyle="outline"
          isDarkTheme={isDarkTheme}
          iconProps={{
            name: 'call',
            type: 'Ionicons',
            isButtonType: true,
            backgroundColor: themeColors.primary,
            color: themeColors.white,
          }}
          appColor='lightColor'
          marginBottom={20}
          paddingVertical={8}
          paddingHorizontal={16}
          borderRadius={30}
          title="Dial Call"
        />
        <Button
          iconProps={{
            name: 'call',
            type: 'Ionicons',
            isButtonType: true,
            color: themeColors.primary,
            backgroundColor: themeColors.white,
          }}
          marginBottom={20}
          showShadow
          isDarkTheme={isDarkTheme}
          paddingVertical={8}
          paddingHorizontal={16}
          borderRadius={30}
          title="Pick Call"
        />
      </View>
    </AppView>
  );
}

export default ButtonScreen;
