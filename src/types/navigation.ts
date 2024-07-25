import { NavigationContainerRef } from '@react-navigation/native';

export interface INavigationContainer
  extends NavigationContainerRef<ReactNavigation.RootParamList> {}

export type IRootStack = {
  Home: undefined;
  Login: undefined;
  Main: undefined;
};

export type ITabStack = {
  Home: undefined;
  Wallet: undefined;
};
