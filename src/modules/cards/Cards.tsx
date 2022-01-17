import React from 'react';
import AppText from '../../components/appText/AppText';
import AppView from '../../components/appView/AppView';
import JobCard from '../../components/jobCard/JobCard';
import ListRow from '../../components/listRow/ListRow';
import {useAppTheme} from '../../hooks/useAppTheme';
import styles from './CardsStyle';

function CardsScreen(): JSX.Element {
  const {isDarkTheme} = useAppTheme();

  return (
    <AppView
      isDarkTheme={isDarkTheme}
      appColor="background"
      style={styles.container}>
      <AppText style={styles.heading} fontStyle="bold" fontSize={50}>
        Cards
      </AppText>
      <ListRow
        flexStyle={{
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <JobCard isDarkTheme={isDarkTheme} />
        <JobCard isDarkTheme={isDarkTheme} />
      </ListRow>
    </AppView>
  );
}

export default CardsScreen;
