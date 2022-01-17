import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';

export default StyleSheet.create({
  container: {
    backgroundColor: hexToRgbA(themeColors.gray, 0.1),
    width: '100%',
    borderRadius: 8,
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
