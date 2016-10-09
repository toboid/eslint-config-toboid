'use strict';

module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  rules: {
    'no-extra-semi': 2,
    semi: 2,
    strict: 2,
    'space-before-function-paren': 2,
    'no-var': 2,
    'prefer-const': 2,
    'eol-last': 2,
    'no-multiple-empty-lines': [
      2,
      {max: 1}
    ],
    quotes: [2, 'single'],
    'no-console': 0
  }
};