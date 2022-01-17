import React from 'react';
import AppText from '../../components/appText/AppText';
import AppView from '../../components/appView/AppView';
import AppList from '../../components/list/List';
import {useAppTheme} from '../../hooks/useAppTheme';
import styles from './ListsStyle';

function ListsScreen(): JSX.Element {
  const {isDarkTheme} = useAppTheme();

  return (
    <AppView
      isDarkTheme={isDarkTheme}
      appColor="background"
      style={styles.container}>
      <AppText style={styles.heading} fontStyle="bold" fontSize={50}>
        Lists Row
      </AppText>
      <AppList isDarkTheme={isDarkTheme} heading="My Profile" />
      <AppList
        appColor="gray"
        isDarkTheme={isDarkTheme}
        flexStyle={{
          paddingVertical: 10,
          paddingLeft: 0,
          marginTop: 20,
          paddingRight: 15,
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        }}
        appColorOpacity={0.1}
        iconProps={{
          name: 'navigate-next',
          type: 'MaterialIcons',
        }}
        heading="Learn More"
      />

      <AppList
        isDarkTheme={isDarkTheme}
        appColor="gray"
        flexStyle={{
          paddingVertical: 10,
          paddingLeft: 5,
          marginTop: 20,
        }}
        appColorOpacity={0.1}
        iconProps={{
          name: 'payments',
          type: 'MaterialIcons',
        }}
        heading="Payment Method"
      />

      <AppList
        appColor="primary"
        flexStyle={{
          paddingVertical: 10,
          paddingLeft: 5,
          marginTop: 10,
        }}
        appColorOpacity={0.2}
        iconProps={{
          name: 'payments',
          type: 'MaterialIcons',
          appColor: 'primary',
        }}
        textProps={{
          textColor: 'primary',
        }}
        heading="Payment Method"
      />

      <AppList
        appColor="success"
        flexStyle={{
          paddingVertical: 10,
          paddingLeft: 5,
          marginTop: 10,
        }}
        appColorOpacity={0.2}
        iconProps={{
          name: 'payments',
          type: 'MaterialIcons',
          appColor: 'success',
        }}
        textProps={{
          textColor: 'success',
        }}
        heading="Payment Method"
      />

      <AppList
        appColor="danger"
        flexStyle={{
          paddingVertical: 10,
          paddingLeft: 5,
          marginTop: 10,
        }}
        appColorOpacity={0.2}
        iconProps={{
          name: 'payments',
          type: 'MaterialIcons',
          appColor: 'danger',
        }}
        textProps={{
          textColor: 'danger',
        }}
        heading="Payment Method"
      />

      <AppList
        appColor="info"
        flexStyle={{
          paddingVertical: 10,
          paddingLeft: 5,
          marginTop: 10,
        }}
        appColorOpacity={0.2}
        iconProps={{
          name: 'support-agent',
          type: 'MaterialIcons',
          appColor: 'info',
        }}
        textProps={{
          textColor: 'info',
        }}
        heading="Customer Support"
      />
    </AppView>
  );
}

export default ListsScreen;
