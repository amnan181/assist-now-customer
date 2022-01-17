import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: themeColors.primary,
    marginTop: 20,
  },
  logo: {},
});
