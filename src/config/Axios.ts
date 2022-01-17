import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import {API_URL} from 'react-native-dotenv';

const AxiosInstance = axios.create({
  baseURL: API_URL,
});

let accessToken = '';

type UserDetailParseType = {
  accessToken?: string;
};

AxiosInstance.interceptors.request.use(async function (config) {
  const userDetail = await Keychain.getGenericPassword();
  if (userDetail) {
    const token = <UserDetailParseType>JSON.parse(userDetail.password);
    if (token.accessToken) {
      accessToken = token.accessToken;
    }
  }

  if (config.headers) {
    config.headers.Authorization = accessToken ? `JWT ${accessToken}` : '';
  }
  return config;
});
export default AxiosInstance;
