import React from 'react';
import {View} from 'react-native';
import AppText from '../../components/appText/AppText';
import AppView from '../../components/appView/AppView';
import Badge from '../../components/badge/Badge';
import {useAppTheme} from '../../hooks/useAppTheme';
import styles from './BadgesStyle';

function BadgesScreen(): JSX.Element {
  const {isDarkTheme} = useAppTheme();

  return (
    <AppView
      isDarkTheme={isDarkTheme}
      appColor="background"
      style={styles.container}>
      <AppText style={styles.heading} fontStyle="bold" fontSize={50}>
        Badges
      </AppText>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <Badge badgeType="success" />
        <Badge badgeType="info" />
        <Badge badgeType="warning" />
        <Badge badgeType="danger" />
      </View>
    </AppView>
  );
}

export default BadgesScreen;
