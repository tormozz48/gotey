module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'max-len': ['warn', {'code': 120}],
    'require-jsdoc': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
};
