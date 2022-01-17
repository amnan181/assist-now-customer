import React from 'react';
import {View, ViewProps} from 'react-native';
import {getAppColor} from '../../helpers/ThemeHelper';
import {AppCommonPropTypes} from '../../types/AppTypes';
import {CustomStyleTypes} from '../../types/StylesTypes';
import AppStar from '../AppStar/AppStar';
import AppText from '../appText/AppText';
import ListRow from '../listRow/ListRow';
import Thumbnail from '../thumbnail/Thumbnail';
import styles from './JobCardStyle';

export type JobCardPropsTypes = ViewProps & AppCommonPropTypes;

const IMAGE_URI =
  'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg';

function JobCard(props: JobCardPropsTypes): JSX.Element {
  const customStyle: CustomStyleTypes = {};
  if (props.isDarkTheme) {
    customStyle.backgroundColor = getAppColor(
      'lightColor',
      props.appColorOpacity,
      props.isDarkTheme,
    );
  }

  return (
    <View {...props} style={[styles.container, customStyle, props.style]}>
      <AppText marginBottom={12} fontStyle="medium" textColor="primary">
        SCHEDULED
      </AppText>
      <Thumbnail imageSize={72} source={{uri: IMAGE_URI}} />
      <AppText
        marginBottom={19}
        textColor="text"
        isDarkTheme={props.isDarkTheme}
        textColorOpacity={0.8}
        marginTop={11}
        fontSize={20}
        fontStyle="bold">
        Tom Hardy
      </AppText>
      <AppStar starStyle={{marginHorizontal: 0}} starSize={16} rating={3.5} />
      <AppText
        marginTop={11}
        marginBottom={15}
        fontStyle="light"
        isDarkTheme={props.isDarkTheme}
        textColor="gray">
        September 29
      </AppText>

      <ListRow
        flexStyle={{
          alignItems: 'center',
        }}>
        <AppText
          isDarkTheme={props.isDarkTheme}
          fontWeight="400"
          fontStyle="light"
          textColor="text">
          11:00am
        </AppText>
        <View
          style={[
            styles.dot,
            {backgroundColor: getAppColor('text', undefined, props.isDarkTheme)},
          ]}
        />
        <AppText
          isDarkTheme={props.isDarkTheme}
          fontWeight="400"
          fontStyle="light"
          textColor="text">
          2 hours
        </AppText>
      </ListRow>

      <AppText
        marginBottom={16}
        textColor="warning"
        textColorOpacity={0.8}
        marginTop={18}
        fontSize={20}
        fontStyle="bold">
        $40.00
      </AppText>
      <AppText
        isDarkTheme={props.isDarkTheme}
        marginBottom={15}
        fontStyle="light"
        textColor="gray">
        Tip: $10.00
      </AppText>
    </View>
  );
}

export default JobCard;
