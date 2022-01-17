import React from 'react';
import AppScrollView from '../../components/appScrollView/AppScrollView';
import AppText from '../../components/appText/AppText';
import AppView from '../../components/appView/AppView';
import {useAppTheme} from '../../hooks/useAppTheme';
import styles from './HeadingStyle';

function HeadingScreen(): JSX.Element {
  const {isDarkTheme} = useAppTheme();
  return (
    <AppScrollView>
      <AppView
        isDarkTheme={isDarkTheme}
        appColor="background"
        style={styles.container}>
        <AppText style={styles.heading} fontStyle="bold" fontSize={50}>
          Typography
        </AppText>
        <AppText style={styles.heading} fontStyle="bold" fontSize={32}>
          Font Sizes
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontSize={'h6'}>
          Display H6
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontSize={'h5'}>
          Display H5
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontSize={'h4'}>
          Display H4
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontSize={'h3'}>
          Display H3
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontSize={'h2'}>
          Display H2
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontSize={'h1'}>
          Display H1
        </AppText>

        <AppText style={styles.heading} fontStyle="bold" fontSize={32}>
          Font Family
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontStyle="light" fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText
          isDarkTheme={isDarkTheme}
          fontStyle="extraLight"
          fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText
          isDarkTheme={isDarkTheme}
          fontStyle="extraLightItalic"
          fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText
          isDarkTheme={isDarkTheme}
          fontStyle="lightItalic"
          fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontStyle="medium" fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontStyle="semiBold" fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontStyle="black" fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText
          isDarkTheme={isDarkTheme}
          fontStyle="blackItalic"
          fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText isDarkTheme={isDarkTheme} fontStyle="bold" fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText
          isDarkTheme={isDarkTheme}
          fontStyle="blackItalic"
          fontSize={'h2'}>
          Display H6
        </AppText>
        <AppText
          isDarkTheme={isDarkTheme}
          fontStyle="boldItalic"
          fontSize={'h2'}>
          Display H6
        </AppText>
      </AppView>
    </AppScrollView>
  );
}

export default HeadingScreen;
