import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, Pressable, Easing, View, TouchableOpacity } from 'react-native';
import { colors, languages } from 'res';
import { Icon, Text } from '..';
import { navigation } from '../../utils/navigation';
import { Api } from '../../api';
import { Context } from '../../store';

const { new: newText } = languages.t('default');

const Tab = ({ isFocused, onPress, onLongPress, index, route, options, state }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
});
