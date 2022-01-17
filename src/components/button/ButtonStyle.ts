import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';

export default StyleSheet.create({
  container: {
    backgroundColor: hexToRgbA(themeColors.primary, 1),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  heading: {
    fontSize: 20,
    color: themeColors.white,
    textTransform: 'capitalize',
  },
});
