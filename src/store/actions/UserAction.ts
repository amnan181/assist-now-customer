import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import AxiosInstance from '../../config/Axios';
import {AppThunk} from '../../config/Store';
import {showToast} from '../../helpers/AppHelpers';
import ErrorHelper from '../../helpers/ErrorHelpers';
import {
  UseForgotPasswordActionParam,
  UserLoginActionParam,
  UserModel,
  UserRegisterActionParam,
} from '../../types/UserTypes';
import {setUser} from '../reducers/UserReducer';

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

type RegisterUserResponseType = {
  accessToken: string;
};

type ForgotPasswordResponseType = {
  detail: string;
};

type UpdateUserProfileResponseType = UserModel;

export const registerUserWithCred =
  (
    params: UserRegisterActionParam,
    callBack: (success?: undefined | boolean) => void,
  ): AppThunk =>
  async dispatch => {
    try {
      const apiRes = await AxiosInstance.request<RegisterUserResponseType>({
        method: 'POST',
        url: '/auth/register/',
        data: params,
      });
      const user = apiRes.data;
      if (user) {
        await Keychain.setGenericPassword('access_token', JSON.stringify(user));
        const userDetail = await fetchUser();
        await Keychain.setGenericPassword(
          'access_token',
          JSON.stringify({...user, user: userDetail}),
        );
        dispatch(setUser(userDetail));
      }
      callBack(true);
    } catch (error) {
      callBack();
      ErrorHelper(error);
    }
  };

async function fetchUser(): Promise<UserModel> {
  return new Promise<UserModel>((resolve, reject) => {
    AxiosInstance.request<UserModel>({
      method: 'GET',
      url: '/auth/user/',
    })
      .then(result => {
        resolve(result.data);
      })
      .catch(e => reject(e));
  });
}

export const loginUserWithCred =
  (params: UserLoginActionParam, callBack: () => void): AppThunk =>
  async dispatch => {
    try {
      const apiRes = await AxiosInstance.request<RegisterUserResponseType>({
        method: 'POST',
        url: '/auth/login/',
        data: params,
      });
      const user = apiRes.data;
      if (user) {
        await Keychain.setGenericPassword('access_token', JSON.stringify(user));
        const userDetail = await fetchUser();
        await Keychain.setGenericPassword(
          'access_token',
          JSON.stringify({...user, user: userDetail}),
        );
        dispatch(setUser(userDetail));
      }
      callBack();
    } catch (error) {
      callBack();
      ErrorHelper(error);
    }
  };

export const forgotUserPassword =
  (
    params: UseForgotPasswordActionParam,
    callBack: (isSuccess?: boolean) => void,
  ): AppThunk =>
  async () => {
    try {
      const apiRes = await AxiosInstance.request<ForgotPasswordResponseType>({
        method: 'POST',
        url: '/auth/password/reset/',
        data: params,
      });
      showToast({
        type: 'success',
        title: 'Success',
        message: apiRes.data?.detail,
      });
      callBack(true);
    } catch (error) {
      callBack();
      ErrorHelper(error);
    }
  };

export const updateUserProfile =
  (params: FormData, callBack: (isSuccess?: boolean) => void): AppThunk =>
  async dispatch => {
    try {
      const apiRes = await AxiosInstance.request<UpdateUserProfileResponseType>(
        {
          method: 'PUT',
          url: '/auth/profile/update/',
          data: params,
        },
      );
      const userDetail = apiRes.data;
      if (userDetail) {
        const user = await Keychain.getGenericPassword();
        if (user) {
          const oldUserDetail = <UserAsyncStorageType>JSON.parse(user.password);
          await Keychain.setGenericPassword(
            'access_token',
            JSON.stringify({...oldUserDetail, user: userDetail}),
          );
          dispatch(setUser(userDetail));
        }
      }
      showToast({
        type: 'success',
        title: 'Success',
        message: 'Successfully Updated!',
      });
      callBack(true);
    } catch (error) {
      callBack();
      ErrorHelper(error);
    }
  };

export const logoutCurrentUser = (): AppThunk => async dispatch => {
  try {
    await Keychain.resetGenericPassword();
    dispatch(setUser(null));
  } catch (error) {
    ErrorHelper(error);
  }
};
interface UserAsyncStorageType {
  user: UserModel;
}

type FetchUserErrorResponse = {
  code?: string;
};

export const fetchCurrentUserDetails =
  (callBack: () => void, updateUser?: boolean): AppThunk =>
  async dispatch => {
    try {
      const user = await Keychain.getGenericPassword();
      if (user) {
        const userDetail = <UserAsyncStorageType>JSON.parse(user.password);
        if (updateUser) {
          userDetail.user = await fetchUser();
        }
        dispatch(setUser(userDetail.user));
      }
      callBack();
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        if ((error.response?.data as FetchUserErrorResponse)?.code === 'token_not_valid') {
          showToast({
            type: 'error',
            title: 'Error',
            message: 'Please login again to access!',
          });
          dispatch(logoutCurrentUser());
        }
      }
      callBack();
    }
  };
