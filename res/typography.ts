//Apply typography customizations here

const typography = {
  h1: {
    fontSize: 52,
  },
  h2: {
    fontSize: 40,
  },
  h3: {
    fontSize: 30,
  },
  t1: {
    fontSize: 24,
  },
  t2: {
    fontSize: 20,
  },
  t3: {
    fontSize: 16,
  },
  p1: {
    fontSize: 18,
  },
  p2: {
    fontSize: 16,
  },
  p3: {
    fontSize: 13,
  },
  d1: {
    fontSize: 14,
  },
  d2: {
    fontSize: 13,
  },
  d3: {
    fontSize: 11,
  },
} as const;

export type ITypography = keyof typeof typography;

export default typography;
