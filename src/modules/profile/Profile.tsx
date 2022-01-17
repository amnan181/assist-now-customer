import React from 'react';
import {Platform, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import styles from './ProfileStyle';
import {useUserUpdate} from '../../hooks/UserHooks';
import {useAppTheme} from '../../hooks/useAppTheme';
import AppText from '../../components/appText/AppText';
import Thumbnail from '../../components/thumbnail/Thumbnail';
import AppView from '../../components/appView/AppView';
import AppIcon from '../../components/appIcon/AppIcon';

const IMAGE_URI =
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

function ProfileScreen(): JSX.Element {
  const {
    user,
    loading,
    userAvatar,
    firstName,
    lastName,
    onSubmit,
    onCameraPress,
    onChangeFirstNameText,
    onChangeLastNameText,
  } = useUserUpdate();
  const {isDarkTheme} = useAppTheme();
  let name = user?.email;
  if (user?.firstName || user?.lastName) {
    name = `${user?.firstName} ${user?.lastName}`;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <AppView>
        <Thumbnail imageSize={120} source={{uri: userAvatar || user?.profile?.profilePhoto || IMAGE_URI}} />
        <TouchableOpacity onPress={onCameraPress} style={styles.cameraBtn}>
          <AppIcon appColor="white" isButtonType name="camera" />
        </TouchableOpacity>
      </AppView>
      <AppText textColor="primary" style={styles.heading}>
        {name}
      </AppText>
      <Input
        isDarkTheme={isDarkTheme}
        width={'100%'}
        value={firstName}
        onChangeText={onChangeFirstNameText}
        placeholder="First Name"
      />

      <Input
        isDarkTheme={isDarkTheme}
        width={'100%'}
        value={lastName}
        onChangeText={onChangeLastNameText}
        placeholder="Last Name"
      />

      <Button
        isDarkTheme={isDarkTheme}
        onPress={onSubmit}
        disabled={loading}
        marginTop={10}
        fullWidth
        showShadow
        title={loading ? 'Please wait..' : 'Update'}
      />
    </KeyboardAvoidingView>
  );
}

export default ProfileScreen;
