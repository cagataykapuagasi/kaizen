import React, { useEffect, useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import { setNavigation } from 'src/utils/navigation';
import { INavigationContainer, IRootStack } from 'src/types/navigation';
import { languages } from 'res';
import BootSplash from 'react-native-bootsplash';
import { StoreProvider } from 'src/store';

const Stack = createNativeStackNavigator<IRootStack>();

const { apple } = languages.get('login');

export const Router = () => {
  const handleRef = (ref: INavigationContainer) => {
    setNavigation(ref);
  };

  const onReady = () => {
    BootSplash.hide({ fade: true });
  };

  return (
    <StoreProvider>
      <NavigationContainer ref={handleRef} onReady={onReady}>
        <MainNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
