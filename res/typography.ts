import { TextStyle } from 'react-native';

interface ITypography {
  [key: string]: TextStyle;
}

const typography: ITypography = {
  h1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 52,
    lineHeight: 62.4,
  },
  h2: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -1.5,
  },
  h3: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: -1.15,
  },
  t1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28.8,
  },
  t2: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
  },
  t3: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
  },
  p1: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 27,
  },
  p2: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
  },
  p3: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 19.5,
  },
  d1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
  },
  d2: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18.2,
  },
};

export default typography;
