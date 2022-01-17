import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';
import {hexToRgbA} from '../../helpers/ThemeHelper';

export default StyleSheet.create({
  container: {},
  inputContainer: {
    borderColor: hexToRgbA(themeColors.gray, 0.1),
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    shadowColor: hexToRgbA(themeColors.gray, 0.2),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.84,
    elevation: 15,
    marginBottom: 10,
    marginTop: 12,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  rightButton: {
    position: 'absolute',
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
  },
});
