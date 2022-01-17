import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';

const shadowColor = hexToRgbA(themeColors.gray, 0.5);

export default StyleSheet.create({
  container: {
    shadowColor,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9.84,
    elevation: 15,
    backgroundColor: themeColors.white,
    width: '49%',
    minHeight: 336,
    borderRadius: 14,
    paddingTop: 18,
    alignItems: 'center',
  },
  dot: {
    backgroundColor: themeColors.text,
    width: 2,
    height: 2,
    borderRadius: 3,
    marginHorizontal: 8,
  },
});
