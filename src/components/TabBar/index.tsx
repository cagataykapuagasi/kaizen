import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tab from './Tab';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { tabBarHeight } from 'src/utils/config';
import { colors } from 'res/index';

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state?.routes?.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Tab
            key={route?.key}
            onLongPress={onLongPress}
            onPress={onPress}
            isFocused={isFocused}
            options={options}
          />
        );
      })}
    </View>
  );
}
export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: tabBarHeight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderWidth: 1.5,
    borderColor: colors.borderColor,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
});
