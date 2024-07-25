import React from 'react';
import { View } from '..';
import { tabBarHeight } from 'src/utils/config';
import { SafeAreaView, ViewStyle } from 'react-native';
import { IColors } from 'res/colors';

interface IContainer {
  children?: React.ReactNode;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  backgroundColor?: IColors;
}

function Container({ children, style, containerStyle, backgroundColor }: IContainer) {
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
