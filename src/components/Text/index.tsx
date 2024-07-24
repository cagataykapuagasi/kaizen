import React, { ReactNode } from 'react';
import { StyleSheet, Text, StyleProp, TextStyle, TextProps } from 'react-native';
import { typography } from 'res';
import { IColors } from 'res/colors';
import { ITypography } from 'res/typography';
import { useCommonContext } from 'src/store';

export interface IText extends TextProps {
  children?: ReactNode;
  style?: TextStyle | StyleProp<TextStyle>[];
  color?: IColors;
  size?: ITypography;
  distance?: number;
  animated?: boolean;
  underline?: boolean;
  flex?: number;
  reAnimated?: boolean;
  weight?: TextStyle['fontWeight'];
  onPress?: TextProps['onPress'];
  textTransform?: TextStyle['textTransform'];
  textAlign?: TextStyle['textAlign'];
}

const TextComponent = ({
  children,
  style,
  color = 'white',
  size = 't3',
  weight,
  distance,
  animated = false,
  underline = false,
  flex = undefined,
  reAnimated,
  onPress,
  textTransform,
  textAlign,
  ...props
}: IText) => {
  const textDecorationLine = underline ? 'underline' : 'none';
  const { currentColors } = useCommonContext();

  const componentStyle: StyleProp<TextStyle>[] = [
    styles.style,
    typography?.[size],
    {
      color: currentColors?.[color],
      marginTop: distance,
      textDecorationLine,
      fontWeight: weight || typography?.[size]?.fontWeight,
      flex,
      textTransform,
      textAlign,
    },
    style,
  ];

  if (!children) {
    return null;
  }

  return (
    <Text
      style={componentStyle}
      allowFontScaling={false}
      maxFontSizeMultiplier={1}
      onPress={onPress}
      {...props}>
      {children}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  style: {
    fontFamily: 'Brown',
  },
});
