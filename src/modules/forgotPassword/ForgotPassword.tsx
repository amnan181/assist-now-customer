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
import styles from './ForgotPasswordStyle';
import { useUserForgotPassword } from '../../hooks/UserHooks';
import {useAppTheme} from '../../hooks/useAppTheme';
import AppText from '../../components/appText/AppText';
import logo from '../../assets/logo.png';

function ForgotPassword(): JSX.Element {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const {
    loading,
    email,
    onSubmit,
    onChangeEmailText,
  } = useUserForgotPassword();

  const {isDarkTheme, appTheme} = useAppTheme();
  function signUp() {
    navigation.navigate('Login');
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <AppText textColor="primary" style={styles.heading}>
        Forgot Password
      </AppText>
      <Input
        isDarkTheme={isDarkTheme}
        width={'100%'}
        value={email}
        onChangeText={onChangeEmailText}
        placeholder="Email"
      />


      <Button
        isDarkTheme={isDarkTheme}
        onPress={onSubmit}
        disabled={loading}
        marginTop={10}
        fullWidth
        showShadow
        title={loading ? 'Please wait..' : 'Forgot password'}
      />
      <TouchableOpacity onPress={signUp}>
        <View style={[styles.line, {borderBottomColor: appTheme.border}]}>
          <AppText
            textColor="text"
            isDarkTheme={isDarkTheme}
            style={styles.btnText}>
            Login
          </AppText>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default ForgotPassword;
