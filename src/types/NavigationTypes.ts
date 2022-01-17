import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Profile: undefined;
  ForgotPassword: undefined;
  HeadingScreen: undefined;
  ButtonScreen: undefined;
  BadgesScreen: undefined;
  InputScreen: undefined;
  ToggleScreen: undefined;
  StarsScreen: undefined;
  ListsScreen: undefined;
  CardsScreen: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
