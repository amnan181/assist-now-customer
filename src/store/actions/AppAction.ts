import { AppThunk } from '../../config/Store';
import { changeAppTheme } from '../reducers/AppReducer';

export const CHANGE_APP_THEME = 'CHANGE_APP_THEME';

export const changeAppThemeAction =
  (isDarkTheme: boolean): AppThunk =>
    dispatch => {
      dispatch(changeAppTheme(isDarkTheme));
    };
