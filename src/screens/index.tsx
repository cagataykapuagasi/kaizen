import React, { useEffect, useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onStateChange } from 'src/utils/analytics/onStateChange';
import Home from './Home';
import Login from './Login';
import { setNavigation } from 'src/utils/navigation';
import { INavigationContainer, IRootStack } from 'src/types/navigation';
import { languages } from 'res';

const Stack = createNativeStackNavigator<IRootStack>();

const { apple } = languages.get('login');

export const Router = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  const onReady = () => {
    routeNameRef.current = navigationRef.getCurrentRoute()?.name;
  };

  const handleStateChange = () => {
    onStateChange(routeNameRef.current, navigationRef.getCurrentRoute()?.name);
  };

  const handleRef = (ref: INavigationContainer) => {
    navigationRef.current = ref;
    setNavigation(ref);
  };

  return (
    <NavigationContainer ref={handleRef} onReady={onReady} onStateChange={handleStateChange}>
      <MainNavigator />
    </NavigationContainer>
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
