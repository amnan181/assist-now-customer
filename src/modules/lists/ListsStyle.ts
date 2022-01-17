import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    color: themeColors.primary,
    marginBottom: 30,
    marginTop: 30,
  },
});
