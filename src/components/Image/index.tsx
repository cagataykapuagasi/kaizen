import React from 'react';
import { ImageStyle } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

export interface IImage extends FastImageProps {
  height?: ImageStyle['height'];
  width?: ImageStyle['width'];
  radius?: number;
  distance?: number;
  rounded?: boolean;
}

const _Image = ({ height, width, radius, rounded, distance, style, ...props }: IImage) => {
  return (
    <FastImage
      style={[
        {
          height,
          width,
          borderRadius: rounded ? 9999 : radius,
          marginTop: distance,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default _Image;
