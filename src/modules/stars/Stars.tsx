import React from 'react';
import AppStar from '../../components/AppStar/AppStar';
import AppText from '../../components/appText/AppText';
import AppView from '../../components/appView/AppView';
import { useAppTheme } from '../../hooks/useAppTheme';
import styles from './StarsStyle';

function StarsScreen(): JSX.Element {
  const {isDarkTheme} = useAppTheme();

  return (
    <AppView isDarkTheme={isDarkTheme} appColor='background' style={styles.container}>
      <AppText style={styles.heading} fontStyle="bold" fontSize={50}>
        Star Ratings
      </AppText>
      <AppStar starSize={20} rating={3} />
      <AppStar rating={3} />
      <AppStar starSize={38} rating={3} />

      <AppText style={styles.heading} fontStyle="bold" fontSize={20}>
        Colors
      </AppText>
      <AppStar appColor='primary' rating={1} />
      <AppStar appColor='info' rating={3} />

      <AppText style={styles.heading} fontStyle="bold" fontSize={20}>
        Disabled
      </AppText>
      <AppStar disabled rating={3} />
    </AppView>
  );
}

export default StarsScreen;
