import Toast from 'react-native-toast-message';
import {ToastShownTypes} from '../types/AppTypes';

export function validateEmail(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function showToast(toast: ToastShownTypes): void {
  Toast.show({
    type: toast.type || 'error',
    text1: toast.title || 'Error',
    text2: toast.message,
  });
  // Alert.alert(toast.title || 'Error', toast.message);
}
