import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { IColors } from 'res/colors';
import { useCommonContext } from 'src/store';

export interface IView extends ViewProps {
  distance?: number;
  backgroundColor?: IColors;
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  paddingVertical?: ViewStyle['paddingVertical'];
  padding?: ViewStyle['padding'];
  row?: boolean;
  radius?: ViewStyle['borderRadius'];
  gap?: ViewStyle['gap'];
  height?: ViewStyle['height'];
  width?: ViewStyle['width'];
  flex?: ViewStyle['flex'];
  spaceBetween?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
}

const ViewComponent = ({
  children,
  distance,
  style,
  backgroundColor = 'transparent',
  paddingHorizontal,
  padding,
  paddingVertical,
  radius,
  row,
  flex,
  spaceBetween,
  gap,
  height,
  width,
  alignCenter,
  justifyCenter,
  justifyContent,
  alignItems,
  ...props
}: IView) => {
  const { currentColors } = useCommonContext();

  const customStyles = {
    spaceBetween: { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' },
  } as const;

  return (
    <View
      style={[
        {
          backgroundColor: currentColors[backgroundColor],
          marginTop: distance,
          paddingHorizontal,
          padding,
          paddingVertical,
          flexDirection: row ? 'row' : undefined,
          borderRadius: radius,
          flex,
          gap,
          height,
          width,
          justifyContent: justifyContent ?? (justifyCenter ? 'center' : undefined),
          alignItems: alignItems ?? (alignCenter ? 'center' : undefined),
        },
        spaceBetween && customStyles.spaceBetween,
        style,
      ]}
      {...props}
      //
    >
      {children}
    </View>
  );
};

export default ViewComponent;
