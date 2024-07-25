import React from 'react';
import { View } from '..';
import { tabBarHeight } from 'src/utils/config';
import { SafeAreaView } from 'react-native';

function Container({ children, style, containerStyle, backgroundColor }) {
  return (
    <View
      flex={1}
      backgroundColor={backgroundColor}
      style={[{ paddingBottom: tabBarHeight }, style]}>
      <SafeAreaView style={{ flex: 1 }}>
        <View flex={1} style={containerStyle}>
          {/* container */}
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Container;
