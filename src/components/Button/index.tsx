import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text, View } from '..';
import { IView } from '../View';
import { IText } from '../Text';

export interface IButton extends TouchableOpacityProps {
  viewProps?: IView;
  textProps?: IText;
  text?: string;
}

const Button = ({ viewProps, textProps, text, children, ...props }: IButton) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View
        justifyCenter
        alignCenter
        height={40}
        radius={30}
        padding={10}
        backgroundColor="secondary"
        {...viewProps}>
        <Text numberOfLines={1} color="primary" size="d2" weight="700" {...textProps}>
          {children || text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
