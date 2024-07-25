/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BootSplash from 'react-native-bootsplash';
import { Button, Container, Icon, Text, View } from 'src/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import Image from 'src/components/Image';
import images from 'res/images';
import { PromotionModule } from 'src/modules';

function Home() {
  return (
    <Container backgroundColor="primary" containerStyle={styles.container}>
      <View gap={12} spaceBetween paddingHorizontal={15}>
        <Image height={40} width={81} source={images.home_logo} />

        <View row gap={10} style={{ flexShrink: 1 }}>
          <Button>Giriş Yap</Button>

          <Icon backgroundColor="dark" size={16} name="profile" container height={40} width={40} />
        </View>
      </View>

      <PromotionModule />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  padding: {
    paddingHorizontal: 15,
  },
});

export default Home;
