import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login/Login';
import Signup from '../modules/signup/Signup';
import {RootStackParamList} from '../types/NavigationTypes';
import Home from '../modules/home/Home';
import SideBar from '../components/sidebar/SideBar';
import {useCurrentUser} from '../hooks/UserHooks';
import Splash from '../modules/splash/Splash';
import HeadingScreen from '../modules/heading/Heading';
import ButtonScreen from '../modules/buttons/Buttons';
import BadgesScreen from '../modules/badges/Badges';
import InputScreen from '../modules/inputs/Inputs';
import ToggleScreen from '../modules/toggles/Toggles';
import StarsScreen from '../modules/stars/Stars';
import ListsScreen from '../modules/lists/Lists';
import CardsScreen from '../modules/cards/Cards';
import {useAppThemeChanger} from '../hooks/useAppTheme';
import ForgotPassword from '../modules/forgotPassword/ForgotPassword';
import ProfileScreen from '../modules/profile/Profile';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

function MainNavigation(): JSX.Element {
  const {appTheme, navigationTheme} = useAppThemeChanger();
  const {loading, isLogin} = useCurrentUser(true);
  if (loading) {
    return <Splash />;
  }
  function renderDrawerContent(props: DrawerContentComponentProps) {
    return <SideBar {...props} />;
  }
  return (
    <NavigationContainer theme={navigationTheme}>
      {isLogin ? (
        <Drawer.Navigator
          screenOptions={{
            headerTintColor: appTheme.white,
            headerStyle: {backgroundColor: appTheme.primary},
          }}
          drawerContent={renderDrawerContent}
          initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="HeadingScreen" component={HeadingScreen} />
          <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
          <Stack.Screen name="InputScreen" component={InputScreen} />
          <Stack.Screen name="ToggleScreen" component={ToggleScreen} />
          <Stack.Screen name="BadgesScreen" component={BadgesScreen} />
          <Stack.Screen name="StarsScreen" component={StarsScreen} />
          <Stack.Screen name="ListsScreen" component={ListsScreen} />
          <Stack.Screen name="CardsScreen" component={CardsScreen} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default MainNavigation;
