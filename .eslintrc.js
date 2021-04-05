module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/state-in-constructor': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      'components': ['Link'],
      'specialLink': ['address'],
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
    'jsx-a11y/label-has-associated-control': ['error', {
      'depth': 3,
    }],
  },
};
