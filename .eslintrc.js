module.exports = {
  extends: ['@react-native'],
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-access-state-in-setstate': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-typos': 2,
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', 'jsx', 'ts', 'tsx']},
    ],
    'no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: false},
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    strict: ['error', 'global'],
    'global-require': 'off',
    'react/forbid-prop-types': 'off',
    'react/sort-comp': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
