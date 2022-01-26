module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'vuetify',
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'vm'],
      },
    ],
    'no-shadow': ['error', { allow: ['state'] }],
    'linebreak-style': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
