import analytics from '@react-native-firebase/analytics';

export const onStateChange = async (
  previousRouteName: string | undefined,
  currentRouteName: string | undefined
) => {
  if (previousRouteName !== currentRouteName) {
    previousRouteName = currentRouteName;

    await analytics().logScreenView({
      screen_name: currentRouteName,
      screen_class: currentRouteName,
    });
  }
};
