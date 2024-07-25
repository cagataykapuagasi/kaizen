import { NavigationContainerRef } from '@react-navigation/native';

export interface INavigationContainer
  extends NavigationContainerRef<ReactNavigation.RootParamList> {}

export type IRootStack = {
  Main: undefined;
  PromotionDetail: undefined;
};

export type ITabStack = {
  Home: undefined;
  Middle: undefined;
  Wallet: undefined;
};

export type IParamList = {
  PromotionDetail: {
    id: number;
  };
};
