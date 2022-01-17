import {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {RootState} from '../config/Store';
import {showToast, validateEmail} from '../helpers/AppHelpers';
import {
  fetchCurrentUserDetails,
  forgotUserPassword,
  loginUserWithCred,
  logoutCurrentUser,
  registerUserWithCred,
  updateUserProfile,
} from '../store/actions/UserAction';
import {LoginScreenNavigationProp} from '../types/NavigationTypes';
import {
  CurrentUserDetailsHookReturnType,
  UserLoginHookReturnType,
  UserRegisterHookReturnType,
} from '../types/UserTypes';
import useObjectState from './UseObjectState';
import {useAppDispatch, useAppSelector} from './UseReduxHooks';

function reduxToStore({user}: RootState) {
  return {
    user: user.user,
  };
}

export function useCurrentUser(
  fetchUser?: boolean,
): CurrentUserDetailsHookReturnType {
  const [state, setState] = useObjectState({loading: true});
  const {user} = useAppSelector(reduxToStore);
  const dispatch = useAppDispatch();
  function callBack() {
    setState({loading: false});
  }
  useEffect(() => {
    dispatch(fetchCurrentUserDetails(callBack, fetchUser));
  }, []);
  function logout() {
    dispatch(logoutCurrentUser());
  }
  const isLogin = user ? true : false;
  // for testing
  // const isLogin = true;
  return {user, loading: state.loading, isLogin, logout};
}

export function useUserLogin(): UserLoginHookReturnType {
  const [state, setState] = useObjectState({
    loading: false,
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  function onChangePasswordValue(password: string): void {
    setState({password});
  }
  function onChangeEmailText(email: string) {
    setState({email});
  }
  function callBack() {
    setState({loading: false});
  }
  function onSubmit() {
    if (!validateEmail(state.email)) {
      showToast({message: 'Please enter valid email address'});
      return;
    }
    if (state.password === '') {
      showToast({message: 'Password field cant be empty'});
      return;
    }
    setState({loading: true});
    dispatch(
      loginUserWithCred(
        {
          email: state.email,
          password: state.password,
        },
        callBack,
      ),
    );
  }

  return {
    email: state.email,
    password: state.password,
    loading: state.loading,
    onChangePasswordValue,
    onSubmit,
    onChangeEmailText,
  };
}

type CatchErrorType = {
  message?: string;
};

export function useUserUpdate() {
  const {user} = useCurrentUser();
  const [state, setState] = useObjectState({
    loading: false,
    firstName: '',
    lastName: '',
  });
  const dispatch = useAppDispatch();
  const [imgResponse, setResponse] = useState<ImageOrVideo>();
  const onCameraPress = useCallback(() => {
    ImagePicker.openCamera({
      cropping: true,
    })
      .then(image => {
        setResponse(image);
        console.log(image);
      })
      .catch((e: CatchErrorType) => {
        if (e?.message) {
          showToast({
            title: 'Error',
            message: e?.message || '',
          });
        }
      });
  }, []);

  useEffect(() => {
    if (user?.firstName || user?.lastName) {
      onChangeFirstNameText(user?.firstName);
      onChangeLastNameText(user?.lastName);
    }
  }, []);

  function onChangeFirstNameText(firstName: string) {
    setState({firstName});
  }
  function onChangeLastNameText(lastName: string) {
    setState({lastName});
  }
  function callBack(isSuccess?: boolean) {
    if (isSuccess) {
      // setTimeout(() => {
      //   navigation.goBack();
      // }, 1000);
    }
    setState({loading: false});
  }
  function onSubmit() {
    const formdata = new FormData();
    if (imgResponse?.path) {
      formdata.append('image', {
        uri: imgResponse.path,
        type: imgResponse.mime,
        name: 'photo.png',
      });
    }
    formdata.append('first_name', state.firstName);
    formdata.append('last_name', state.lastName);
    setState({loading: true});
    dispatch(updateUserProfile(formdata, callBack));
  }

  const userAvatar = imgResponse?.path;

  return {
    user,
    userAvatar,
    ...state,
    onSubmit,
    onCameraPress,
    onChangeFirstNameText,
    onChangeLastNameText,
  };
}

export function useUserForgotPassword() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [state, setState] = useObjectState({
    loading: false,
    email: '',
  });
  const dispatch = useAppDispatch();
  function onChangeEmailText(email: string) {
    setState({email});
  }
  function callBack(isSuccess?: boolean) {
    if (isSuccess) {
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }
    setState({loading: false});
  }
  function onSubmit() {
    if (!validateEmail(state.email)) {
      showToast({message: 'Please enter valid email address'});
      return;
    }
    setState({loading: true});
    dispatch(
      forgotUserPassword(
        {
          email: state.email,
        },
        callBack,
      ),
    );
  }

  return {
    email: state.email,
    loading: state.loading,
    onSubmit,
    onChangeEmailText,
  };
}

export function useUserRegister(): UserRegisterHookReturnType {
  const navigation = useNavigation();
  const [state, setState] = useObjectState({
    loading: false,
    name: '',
    email: '',
    password: '',
    password1: '',
  });
  const dispatch = useAppDispatch();
  function onChangePasswordValue(password: string): void {
    setState({password});
  }
  function onChangeEmailText(email: string) {
    setState({email});
  }
  function onChangePassword1Value(password1: string) {
    setState({password1});
  }
  function onChangeNameText(name: string) {
    setState({name});
  }
  function callBack(success?: undefined | boolean) {
    if (success) {
      navigation.goBack();
    }
    setState({loading: false});
  }
  function onSubmit() {
    if (!validateEmail(state.email)) {
      showToast({message: 'Please enter valid email address'});
      return;
    }

    if (state.password === '') {
      showToast({message: 'Password field cant be empty'});
      return;
    }
    if (state.password1 === '') {
      showToast({message: 'Confirm password field cant be empty'});
      return;
    }
    if (state.password1 !== state.password) {
      showToast({message: 'Confirm Password not matched'});
      return;
    }
    setState({loading: true});
    dispatch(
      registerUserWithCred(
        {
          email: state.email,
          password1: state.password,
          password2: state.password1,
        },
        callBack,
      ),
    );
  }

  return {
    name: state.name,
    email: state.email,
    password: state.password,
    password1: state.password1,
    loading: state.loading,
    onSubmit,
    onChangeNameText,
    onChangeEmailText,
    onChangePasswordValue,
    onChangePassword1Value,
  };
}

export default useUserLogin;
