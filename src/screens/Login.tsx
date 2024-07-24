/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BootSplash from 'react-native-bootsplash';
import DeviceInfo from 'react-native-device-info';
import Config from 'react-native-config';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import branch from 'react-native-branch';
import app from '@react-native-firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { WHITE_LABEL_NAME, BUNDLE_IDENTIFIER, DEEPLINK_SCHEME_ALTERNATE } = Config;

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

console.warn('FirebaseId:', app.app().options.projectId);

//
function Login(): React.JSX.Element {
  useEffect(() => {
    OneSignal.initialize(
      Config?.UNIQUE_WHITELABEL_ID === 'housify'
        ? 'e08fcbb5-0099-4566-b0b0-360827b60932'
        : '05a50603-9f00-4108-9991-9b36ff119453'
    );
    OneSignal.Notifications.requestPermission(true);

    OneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
      console.log('OneSignal: notification clicked:', event);
    });

    setTimeout(() => {
      BootSplash.hide();
    }, 2000);

    branch.subscribe((event) => {
      console.log('event', event);
    });

    branch.getFirstReferringParams().then((r) => console.log('xd', r));
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Bundle ID">
            <Text style={styles.highlight}>{BUNDLE_IDENTIFIER}</Text>
          </Section>
          <Section title="Display Name">
            <Text style={styles.highlight}>{WHITE_LABEL_NAME}</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Login;
