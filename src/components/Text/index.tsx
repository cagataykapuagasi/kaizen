import React, { ReactNode } from 'react';
import { Animated, StyleSheet, Text, StyleProp, TextStyle, TextProps } from 'react-native';
import { typography, colors } from 'res';
import ReAnimated from 'react-native-reanimated';

interface IText extends TextProps {
  children: ReactNode;
  style: TextStyle | StyleProp<TextStyle>[];
  color?: string;
  size?: string;
  distance?: number;
  animated?: boolean;
  underline?: boolean;
  flex?: number;
  reAnimated?: boolean;
  weight?: TextStyle['fontWeight'];
  onPress?: TextProps['onPress'];
}

const TextComponent = ({
  children,
  style,
  color = 'background',
  size = 't3',
  weight,
  distance,
  animated = false,
  underline = false,
  flex = undefined,
  reAnimated,
  onPress,
  ...props
}: IText) => {
  const Component = reAnimated ? ReAnimated.Text : animated ? Animated.Text : Text;
  const textDecorationLine = underline ? 'underline' : 'none';

  const componentStyle: StyleProp<TextStyle>[] = [
    styles.style,
    typography?.[size],
    {
      color: colors?.[color],
      marginTop: distance,
      textDecorationLine,
      fontWeight: weight,
      flex,
    },
    style,
  ];

  return (
    <Component
      style={componentStyle}
      allowFontScaling={false}
      maxFontSizeMultiplier={1}
      onPress={onPress}
      {...props}>
      {children}
    </Component>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  style: {
    fontFamily: 'Brown',
  },
});
