import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import icoMoonConfig from 'res/fonts/selection.json';
import { IconProps } from 'react-native-vector-icons/Icon';
import View from '../View';
import { IColors } from 'res/colors';
import { useCommonContext } from 'src/store';

const iconList = ['back', 'explore', 'profile', 'search', 'star', 'Shape'] as const;

const _Icon = createIconSetFromIcoMoon(icoMoonConfig, 'Icomoon', 'icomoon.ttf');
export type iconName = (typeof iconList)[number];

interface IIcon extends IconProps {
  container?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  height?: number;
  width?: number;
  backgroundColor?: IColors;
  props?: IconProps;
  name: iconName;
  color?: IColors;
  distance?: number;
}

const Icon = ({
  container,
  containerStyle,
  height = 32,
  width = 32,
  backgroundColor = 'secondary',
  color = 'primary',
  distance,
  ...props
}: IIcon) => {
  const { currentColors } = useCommonContext();
  const borderRadius = height / 2;

  return container ? (
    <View
      distance={distance}
      backgroundColor={backgroundColor}
      style={[styles.container, containerStyle, { height, width, borderRadius }]}>
      <_Icon size={24} color={currentColors?.[color]} {...props} />
    </View>
  ) : (
    <_Icon size={24} {...props} color={currentColors?.[color]} />
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
