/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AppText from '../../components/appText/AppText';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useUserRegister} from '../../hooks/UserHooks';
import styles from './SignupStyle';
import logo from '../../assets/logo.png'

function SignUp(): JSX.Element {
  const navigation = useNavigation();
  const {
    email,
    password,
    password1,
    loading,
    onSubmit,
    onChangeEmailText,
    onChangePasswordValue,
    onChangePassword1Value,
  } = useUserRegister();
  const {isDarkTheme, appTheme} = useAppTheme();

  function goBack() {
    navigation.goBack();
  }
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={logo}
          />
          <Text style={styles.heading}>SignUp With Idea Maker</Text>
          {/* <Input
            value={name}
            isDarkTheme={isDarkTheme}
            width={'100%'}
            onChangeText={onChangeNameText}
            placeholder="Name"
          /> */}
          <Input
            value={email}
            isDarkTheme={isDarkTheme}
            width={'100%'}
            onChangeText={onChangeEmailText}
            placeholder="Email"
          />
          <Input
            value={password}
            isDarkTheme={isDarkTheme}
            width={'100%'}
            onChangeText={onChangePasswordValue}
            secureTextEntry
            placeholder="Password"
          />
          <Input
            value={password1}
            isDarkTheme={isDarkTheme}
            width={'100%'}
            onChangeText={onChangePassword1Value}
            secureTextEntry
            placeholder="Confirm Password"
          />

          <Button
            marginTop={10}
            isDarkTheme={isDarkTheme}
            fullWidth
            disabled={loading}
            showShadow
            onPress={onSubmit}
            title={loading ? 'Please wait...' : 'Sign Up'}
          />
          <TouchableOpacity onPress={goBack}>
            <View style={[styles.line, {borderBottomColor: appTheme.border}]}>
              <AppText
                textColor="text"
                isDarkTheme={isDarkTheme}
                style={styles.btnText}>
                Login
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
