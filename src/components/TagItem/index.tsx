import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { colors } from 'res';
import { Image, Text, View } from 'src/components';
import { ITag } from 'src/types/api';
import Icon, { iconName } from '../Icon';

interface ITagItem extends TouchableOpacityProps {
  item: ITag | { Name: string };
  selected?: boolean;
  icon?: iconName;
}

function Promotion({ item, selected, icon, ...props }: ITagItem) {
  const borderColor = selected ? colors.secondary : colors.borderColor;
  const disabled = selected || props.disabled;

  return (
    <TouchableOpacity style={{ opacity: props.disabled ? 0.7 : 1 }} disabled={disabled} {...props}>
      <View gap={8} alignCenter row style={[styles.tagItem, { borderColor }]}>
        {icon ? (
          <Icon container height={24} width={24} name={icon} size={14} color="primary" />
        ) : (
          'IconUrl' in item && <Image height={24} width={24} source={{ uri: item.IconUrl }} />
        )}
        <Text color="black">{item.Name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Promotion;

const styles = StyleSheet.create({
  tagItem: {
    borderWidth: 1.5,
    paddingLeft: 6,
    paddingRight: 10,
    borderRadius: 6,
    paddingVertical: 6,
    borderColor: colors.borderColor,
  },
});
