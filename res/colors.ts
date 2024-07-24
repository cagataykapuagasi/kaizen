/**
 * Projede kullanılan bütün renkler burada tanımlanmalı ve bu dosyadan import edilmelidir.
 * Gereksiz tanımlamalardan uzak durulmalı.
 *
 * Örneğin: splashBackground, mainBackground gibi tanımlanmamalıdır.
 * Bazı istisnai durumlar dışında aynı renkler mümkün mertebe ortak gruplanmalıdır.
 *
 * Bunun yerine:
 *   Ana Renkler       : primary, secondary, light, dark, muted
 *   Durum Renkleri    : danger, success, info, warning
 *   İstisnai Durumlar : shadow, card
 *
 *
 * Renk kodununun ismini bulan site:
 *   https://www.color-blindness.com/color-name-hue/
 *
 *
 * Örnek kullanım:
 * import { colors } from 'assets';
 *
 * colors.primary
 */

type Typograpy = Record<string, string>;

const colors: Typograpy = {
  background: '#17120F',
  background50: '#17120F80',
  background75: '#17120FBF',
  secondaryBackground: '#fff',
  black: '#000',
  white: '#fff',
  gray3: '#828282',
  gray75: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EAEAEA',
  gray300: '#e1e1e1',
  gray400: '#cacaca',
  gray500: '#b3b3b3',
  gray600: '#8e8e8e',
  gray700: '#6e6e6e',
  gray800: '#4b4b4b',
  gray900: '#2c2c2c',
  red: '#bb121a',
  green400: '#2d9d78',
  gold: '#DFC7AD',
  black100: '#313131',
  black200: '#252525',
  red700: '#BB121A',
  green: '#0E6027',
  lightGreen: '#DEFBE6',
  orange: '#FF5B24',
};
export default colors;
