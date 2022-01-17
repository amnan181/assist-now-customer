import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  buttonActive: {},
  heading: {
    fontSize: 20,
    color: themeColors.white,
    textTransform: 'capitalize',
  },
});
