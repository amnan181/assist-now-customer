import {StyleSheet} from 'react-native';
import {themeColors} from '../../constants/Theme';

export default StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
  heading: {
    fontSize: 30,
    color: themeColors.primary,
    marginTop: 30,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    color: themeColors.primary,
    marginBottom: 30,
    marginTop: 4,
    textAlign: 'center',
  },
  line: {
    width: '93%',
    height: 0.3,
    alignSelf: 'flex-end',
  },
  space: {
    marginBottom: 50,
  },
});
