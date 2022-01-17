import {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {RootState} from '../config/Store';
import {
  DEFAULT_DARK_NAVIGATION_THEME,
  DEFAULT_LIGHT_NAVIGATION_THEME,
  themeColors,
  themeDarkColors,
} from '../constants/Theme';
import {changeAppThemeAction} from '../store/actions/AppAction';
import {useAppDispatch, useAppSelector} from './UseReduxHooks';

function reduxToStore({app}: RootState) {
  return app.isDarkTheme;
}

export function useAppTheme() {
  const scheme = useColorScheme();
  const isDarkTheme = useAppSelector(reduxToStore);

  return {
    appTheme: isDarkTheme ? themeColors : themeDarkColors,
    scheme,
    isDarkTheme: isDarkTheme,
    navigationTheme: isDarkTheme
      ? DEFAULT_DARK_NAVIGATION_THEME
      : DEFAULT_LIGHT_NAVIGATION_THEME,
  };
}

export function useAppThemeChanger() {
  const themes = useAppTheme();
  useEffect(() => {
    if (themes.scheme === 'dark') {
      toggleAppTheme(true);
    }
  }, [themes.scheme]);
  const dispatch = useAppDispatch();
  function toggleAppTheme(isDarkTheme: boolean) {
    dispatch(changeAppThemeAction(isDarkTheme));
  }
  return {
    toggleAppTheme,
    ...themes,
  };
}
