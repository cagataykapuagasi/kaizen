const light = {
  primary: 'red',
  secondary: 'gold',
} as const;

const dark = {
  primary: 'red',
  secondary: 'gold',
} as const;

export type IColors = keyof typeof light;
export type ColorsProps = typeof light;

export default light;
export { light, dark };
