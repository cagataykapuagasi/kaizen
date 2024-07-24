import InAppReview from 'react-native-in-app-review';
import Rate, { AndroidMarket } from 'react-native-rate';
import * as StoreReview from 'react-native-store-review';
import { Linking, Platform } from 'react-native';

const url = Platform.select({
  ios: 'itms-apps://apps.apple.com/us/app/swapp-currency-app-in-cyprus/id1661943556?mt=8&action=write-review',
  android: 'market://details?id=com.saypr.moneyconverter',
});

export const requestReview = (isButton) => {
  if (isButton) {
    return Linking.canOpenURL(url).then(() => Linking.openURL(url));
  }

  if (Platform.OS === 'android') {
    if (InAppReview.isAvailable()) {
      InAppReview.RequestInAppReview();
    }
  } else {
    try {
      StoreReview.requestReview();
    } catch (error) {
      try {
        const options = {
          AppleAppID: '1661943556',
          GooglePackageName: 'com.saypr.moneyconverter',
          preferInApp: true,
          openAppStoreIfInAppFails: false,
        };

        Rate.rate(options);
      } catch (err) {}
    }
  }
};
