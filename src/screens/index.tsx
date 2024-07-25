import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Wallet from './Wallet';
import { setNavigation } from 'src/utils/navigation';
import { INavigationContainer, IRootStack, ITabStack } from 'src/types/navigation';
import BootSplash from 'react-native-bootsplash';
import { StoreProvider } from 'src/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from 'src/components';
import { languages } from 'res';
import PromotionDetail from './PromotionDetail';

const { tabBar } = languages.get('default');

const Stack = createNativeStackNavigator<IRootStack>();
const Tab = createBottomTabNavigator<ITabStack>();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 150,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ icon: 'explore', name: tabBar?.explore }}
      />
      <Tab.Screen name="Middle" component={Home} options={{ isMiddle: true }} />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{ name: tabBar?.wallet, icon: 'star' }}
      />
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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="PromotionDetail" component={PromotionDetail} />
    </Stack.Navigator>
  );
};
