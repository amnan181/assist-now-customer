/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from './SideBarStyle';
import {useCurrentUser} from '../../hooks/UserHooks';
import Logo from '../../assets/logo.png';
import {themeColors} from '../../constants/Theme';
import AppToggle from '../toggle/Toggle';
import {useAppThemeChanger} from '../../hooks/useAppTheme';
import {getAppColor} from '../../helpers/ThemeHelper';
import AppView from '../appView/AppView';

function SideBar(props: DrawerContentComponentProps): JSX.Element {
  const {user, logout} = useCurrentUser();
  const {isDarkTheme, toggleAppTheme} = useAppThemeChanger();
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={{height: 50}}>
          <View style={{position: 'absolute', top: 15, left: 20}}>
            <AppToggle
              isDarkTheme={isDarkTheme}
              isOn={isDarkTheme}
              label="Light/Dark"
              labelStyle={{color: getAppColor('text', undefined, isDarkTheme)}}
              onToggle={toggleAppTheme}
              onColor={themeColors.primary}
              size="small"
            />
          </View>
        </View>
        <Image style={styles.logo} resizeMode="contain" source={Logo} />
        <Text style={styles.heading}>Idea Maker</Text>
        <Text style={styles.subHeading}>
          Welcome{'\n'} {user?.firstName || user?.email}
        </Text>
        <DrawerItemList {...props} />
        <AppView style={styles.line} appColor="border" />
        <DrawerItem label={'Logout'} onPress={logout} />
        <View style={styles.space}/>
        {/* <Button onPress={logout} borderRadius={1} title="Logout" /> */}
      </DrawerContentScrollView>
    </>
  );
}

export default SideBar;
