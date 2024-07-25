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
  TouchableOpacity,
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
import { Text } from 'src/components';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        weight="400"
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

//
function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          borderWidth: 2,
          borderTopColor: 'green',
          borderRightColor: 'yellow',
          borderBottomColor: 'orange',
          borderLeftColor: 'red',
          width: 70,
          height: 70,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',

          shadowColor: '#D8D8D8',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.5,
          shadowRadius: 0,
          elevation: 0,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            borderWidth: 3,
            width: 40,
            height: 15,
            borderRadius: 7.5,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'red',
              borderTopLeftRadius: 7.5,
              borderBottomLeftRadius: 7.5,
            }}
          />
          <View style={{ flex: 1, backgroundColor: 'white' }} />
          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',

              borderTopRightRadius: 7.5,
              borderBottomRightRadius: 7.5,
            }}
          />
        </View>

        <View
          style={{
            borderWidth: 3,
            width: 15,
            height: 40,
            borderRadius: 7.5,
            position: 'absolute',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'green',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomWidth: 3,
            }}
          />
          <View style={{ flex: 1, backgroundColor: 'white' }} />
          <View
            style={{
              flex: 1,
              backgroundColor: 'orange',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopWidth: 3,
            }}
          />
        </View>
      </TouchableOpacity>
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
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
  },
  highlight: {},
});

export default Home;
