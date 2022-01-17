import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';

export default StyleSheet.create({
  container: {
    backgroundColor: hexToRgbA(themeColors.gray, 0.1),
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    minWidth: 70,
    alignItems: 'center',
  },
});
