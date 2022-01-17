import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 30,
    color: themeColors.primary,
    marginBottom: 30,
    marginTop: 30,
  },
  logo: {},
  btnText: {
    fontSize: 16,
    paddingBottom: 2,
  },
  line: {
    borderBottomWidth: 1,
    paddingTop: 20,
  },
  keyboardAvoidView: {
    flex: 1,
  },
});
