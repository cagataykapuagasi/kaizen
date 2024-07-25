const light = {
  primary: 'white',
  secondary: '#F40000',
  black: '#000',
  dark: '#1D1E1C',
  tabIconInactive: '#1D1E1C4D',
  transparent: 'transparent',
  borderColor: '#ECEEEF',
  promotionBorder: '#F4F6F5',
  gainsboro: '#D8D8D8',
} as const;

const dark = {
  primary: 'white',
  secondary: '#F40000',
  black: '#000',
  dark: '#1D1E1C',
  tabIconInactive: '#1D1E1C4D',
  transparent: 'transparent',
  borderColor: '#ECEEEF',
  promotionBorder: '#F4F6F5',
  gainsboro: '#D8D8D8',
} as const;

export type IColors = keyof typeof light;
export type ColorsProps = typeof light;

export default light;
export { light, dark };
