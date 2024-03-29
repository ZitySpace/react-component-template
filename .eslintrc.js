module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',

    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: false,
        },
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'off',
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['node_modules/**', 'dist/**'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
