import Toast from 'react-native-simple-toast';
import { languages, colors } from 'res';

const { errorAccured } = languages.t('default');

export const showToastError = (message) => {
  Toast.show(message || errorAccured, undefined, {
    backgroundColor: colors.error,
  });
};
