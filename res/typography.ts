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
    fontSize: 26,
    fontWeight: '700',
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
    fontWeight: '700',
  },
  d2: {
    fontSize: 12,
  },
  d3: {
    fontSize: 10,
    fontWeight: '700',
  },
} as const;

export type ITypography = keyof typeof typography;

export default typography;
