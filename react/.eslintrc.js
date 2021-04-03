const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    babelOptions: {
      configFile: path.join(__dirname, 'babel.config.js'),
    },
  },
  plugins: ['@babel', 'react', 'import', 'prettier', 'react-hooks'],
  rules: {
    /** BASIC STYLE RULES, Stolen from Pomander */
    /* Indentation */
    'no-mixed-spaces-and-tabs': 2,
    indent: [2, 2],
    /* Variable names */
    camelcase: 2,
    /* Language constructs */
    curly: 2,
    eqeqeq: [2, 'smart'],
    'func-style': [1, 'expression'],
    /* Semicolons */
    semi: 2,
    'no-extra-semi': 2,
    /* Padding & additional whitespace (perferred but optional) */
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'keyword-spacing': [1, { before: true, after: true }],
    'space-infix-ops': 1,
    /* Variable declaration */
    'one-var': [1, { uninitialized: 'never', initialized: 'never' }],
    'no-use-before-define': [2, { functions: false }],
    /* Minuta */
    'comma-style': [2, 'last'],
    quotes: [1, 'single'],
    /**
     * Some actual error checking rules
     */
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-bind': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'array-callback-return': 'error',
    'consistent-return': 'error',
    '@babel/no-invalid-this': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.63.1',
    },
  },
};
