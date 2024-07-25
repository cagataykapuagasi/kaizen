import Toast from 'react-native-simple-toast';
import { languages, colors, IColors } from 'res';

const { errorAccured } = languages.get('default');

export const showToastError = (message?: string, backgroundColor?: IColors) => {
  Toast.show(message || errorAccured, Toast.SHORT, {
    backgroundColor: backgroundColor ? colors[backgroundColor] : colors.secondary,
  });
};
