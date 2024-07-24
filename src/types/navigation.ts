import { NavigationContainerRef } from '@react-navigation/native';

export interface INavigationContainer
  extends NavigationContainerRef<ReactNavigation.RootParamList> {}

export type IRootStack = {
  Home: undefined;
  Login: undefined;
  // Feed: { sort: 'latest' | 'top' } | undefined;
};
