module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    files: ['*.ts', '*.tsx'],
    experimentalDecorators: true,
    jsxImportSource: 'react-jsx',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single', {avoidEscape: true}],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': ['error',{
      allowArrowFunctions:false,
      allowFunctions:true

    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
