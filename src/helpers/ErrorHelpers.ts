/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {AxiosError} from 'axios';
import {showToast} from './AppHelpers';

type AxiosErrorResponseReturn = {
  data?: {
    data?: {[key: string]: string[]};
  };
};

type ErrorHelperType = AxiosError<AxiosErrorResponseReturn> | unknown;

export default function ErrorHelper(error: ErrorHelperType): void {
  if (error?.response?.data) {
    let message = 'Something wrong';
    const errorResponse = error?.response?.data?.data || error?.response?.data?.email || error?.response?.data;
    const errors = Object.keys(errorResponse);
    if (errors) {
      if (errorResponse && typeof errorResponse[errors[0]] === 'string') {
        message = errorResponse[errors[0]];
      } else {
        message = errorResponse[errors[0]]?.[0];
      }
    }
    showToast({
      message,
    });
  }
}
