import React from 'react';
import { StyleSheet, Pressable, View, TouchableOpacity } from 'react-native';
import { Icon, Text } from '..';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

function MiddleButton() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        borderWidth: 2,
        borderTopColor: 'green',
        borderRightColor: 'yellow',
        borderBottomColor: 'orange',
        borderLeftColor: 'red',
        width: 70,
        height: 70,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,

        shadowColor: '#D8D8D8',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        elevation: 0,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          borderWidth: 3,
          width: 40,
          height: 15,
          borderRadius: 7.5,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            borderTopLeftRadius: 7.5,
            borderBottomLeftRadius: 7.5,
          }}
        />
        <View style={{ flex: 1, backgroundColor: 'white' }} />
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellow',

            borderTopRightRadius: 7.5,
            borderBottomRightRadius: 7.5,
          }}
        />
      </View>

      <View
        style={{
          borderWidth: 3,
          width: 15,
          height: 40,
          borderRadius: 7.5,
          position: 'absolute',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomWidth: 3,
          }}
        />
        <View style={{ flex: 1, backgroundColor: 'white' }} />
        <View
          style={{
            flex: 1,
            backgroundColor: 'orange',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopWidth: 3,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

interface ITab {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  options: BottomTabNavigationOptions & any;
}

const Tab = ({ isFocused, onPress, onLongPress, options }: ITab) => {
  if (options.isMiddle) {
    return <MiddleButton />;
  }

  return (
    <Pressable style={styles.container} onLongPress={onLongPress} onPress={onPress}>
      <Icon color={isFocused ? 'black' : 'tabIconInactive'} size={24} name={options?.icon} />

      <Text color={isFocused ? 'black' : 'tabIconInactive'} size="d3" textTransform="uppercase">
        {options?.name}
      </Text>
    </Pressable>
  );
};
export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
});
