import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import dayjs from 'dayjs';
import translations from './translations';
import { I18nManager } from 'react-native';
import 'dayjs/locale/tr';
import 'dayjs/locale/en';

const i18n = new I18n(translations);

const locale = RNLocalize.findBestLanguageTag(Object.keys(i18n.translations)) || {
  isRTL: false,
  languageTag: 'tr',
};
I18nManager.forceRTL(locale.isRTL);
i18n.locale = locale.languageTag;
i18n.defaultLocale = 'tr';

dayjs.locale(locale.languageTag);

export default i18n;
