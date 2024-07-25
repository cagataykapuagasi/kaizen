import { CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { INavigationContainer, IRootStack } from 'src/types/navigation';

export let navigation: INavigationContainer;

export const setNavigation = (nav: INavigationContainer) => (navigation = nav);

export function navigate(
  routeName: keyof IRootStack,
  params?: NativeStackScreenProps<IRootStack>['route']['params']
) {
  if (navigation.isReady()) {
    navigation.dispatch(CommonActions.navigate(routeName, params));
  }
}
