import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import { setNavigation } from 'src/utils/navigation';
import { INavigationContainer, IRootStack, ITabStack } from 'src/types/navigation';
import BootSplash from 'react-native-bootsplash';
import { StoreProvider } from 'src/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator<IRootStack>();
const Tab = createBottomTabNavigator<ITabStack>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Home} />
    </Tab.Navigator>
  );
}

export function Router() {
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
}

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
