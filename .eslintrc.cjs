module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 'error',
    'import/no-named-as-default': 'off',
    curly: 'warn',
    semi: 'error',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 0,
    'linebreak-style': 0,
    'react/jsx-props-no-spreading': 'off',
  },
  ignorePatterns: [
    'public',
  ],
};
