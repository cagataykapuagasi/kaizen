import React from 'react';
import { Animated, StyleSheet, Linking, View, ViewProps } from 'react-native';
import { typography, colors } from 'res';
import ReAnimated from 'react-native-reanimated';

const ViewComponent = ({ children }: ViewProps) => {
  return (
    <View
    //
    >
      {children}
    </View>
  );
};

export default ViewComponent;
