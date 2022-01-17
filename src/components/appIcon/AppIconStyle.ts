import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';

export default StyleSheet.create({
  container: {
    backgroundColor: hexToRgbA(themeColors.primary, 1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
});
