/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {
  View,
  Image,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {LoginScreenNavigationProp} from '../../types/NavigationTypes';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import styles from './LoginStyle';
import useUserLogin from '../../hooks/UserHooks';
import {useAppTheme} from '../../hooks/useAppTheme';
import AppText from '../../components/appText/AppText';
import logo from '../../assets/logo.png';

function Login(): JSX.Element {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const {
    loading,
    email,
    password,
    onChangePasswordValue,
    onSubmit,
    onChangeEmailText,
  } = useUserLogin();

  const {isDarkTheme, appTheme} = useAppTheme();
  function signUp() {
    navigation.navigate('SignUp');
  }
  function forgotPassword(){
    navigation.navigate('ForgotPassword');
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <AppText textColor="primary" style={styles.heading}>
        Login With Idea Maker
      </AppText>
      <Input
        isDarkTheme={isDarkTheme}
        width={'100%'}
        value={email}
        onChangeText={onChangeEmailText}
        placeholder="Email"
      />
      <Input
        isDarkTheme={isDarkTheme}
        width={'100%'}
        value={password}
        onChangeText={onChangePasswordValue}
        secureTextEntry
        placeholder="Password"
      />
      <TouchableOpacity style={styles.forgotButton} onPress={forgotPassword}>
        <View
          style={[
            styles.line,
            {paddingTop: 0, borderBottomColor: appTheme.border},
          ]}>
          <AppText textColor="text" isDarkTheme={isDarkTheme}>
            Forgot Password
          </AppText>
        </View>
      </TouchableOpacity>

      <Button
        isDarkTheme={isDarkTheme}
        onPress={onSubmit}
        disabled={loading}
        marginTop={10}
        fullWidth
        showShadow
        title={loading ? 'Please wait..' : 'Login'}
      />
      <TouchableOpacity onPress={signUp}>
        <View style={[styles.line, {borderBottomColor: appTheme.border}]}>
          <AppText
            textColor="text"
            isDarkTheme={isDarkTheme}
            style={styles.btnText}>
            Sign Up
          </AppText>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Login;
