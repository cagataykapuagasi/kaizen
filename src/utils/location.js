import { Platform, Dimensions, Linking } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

const {
  IOS: { LOCATION_WHEN_IN_USE },
  ANDROID: { ACCESS_FINE_LOCATION },
} = PERMISSIONS;

const options = {
  enableHighAccuracy: true,
  forceRequestLocation: true,
};

const getLocation = () =>
  request(
    Platform.select({
      android: ACCESS_FINE_LOCATION,
      ios: LOCATION_WHEN_IN_USE,
    })
  ).then((result) => {
    switch (result) {
      case 'granted':
        return getCurrentPosition();
      case 'denied':
        return getLocation();
      default:
        return result;
    }
  });

const getCurrentPosition = async () => {
  const location = new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject, options);
  });

  return new Promise((resolve, reject) => {
    location
      .then(({ coords: { latitude, longitude } }) => {
        let region = {
          latitude,
          longitude,
        };

        resolve(region);
      })
      .catch((er) => {
        reject(er);
      });
  });
};

const openMaps = async ({ lat, lng, provider = 'apple' }) => {
  //console.warn(await Linking.canOpenURL('comgooglemaps://?center=40.765819,-73.975866'));

  // const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
  // const url = scheme + `${lat},${lng}`;
  // Linking.openURL(url);
  //yandex https://maps.yandex.com/?q=

  //google https://maps.google.com/?q=

  const links = {
    google: `https://maps.google.com/?q=${lat},${lng}`,
    yandex: `yandexnavi://?pt=${lat},${lng}`,
    apple: `maps:0,0?q=${lat},${lng}`,
  };

  // console.warn(await Linking.canOpenURL('https://maps.yandex.com/?q=' + `${lat},${lng}`));

  Linking.canOpenURL(links?.[provider])
    .then(() => Linking.openURL(links?.[provider]))
    .catch((e) => {
      if (provider === 'yandex') {
        Linking.openURL(`https://maps.yandex.com/?pt=${lng},${lat}`);
      }
    });

  // return Linking.openURL(links?.[provider]);

  // openMap({
  //   provider,
  //   latitude: Number(lat),
  //   longitude: Number(lng),
  // });
};

export { getLocation, getCurrentPosition, openMaps };
