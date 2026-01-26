import js from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';

export default [
  nodePlugin.configs['flat/recommended-module'],
  js.configs.recommended,
  {
    rules: {
      'n/exports-style': ['error', 'module.exports'],
      'n/no-unsupported-features/node-builtins': 'off', // fetch and a lot of good things are here
      'n/no-extraneous-require': 'off', // a few libraries use this
      'n/no-extraneous-import': 'off', // a few libraries use this
      'n/no-unpublished-require': 'off', // a few local calls use this
      'n/no-unpublished-import': 'off' // devDependencies and local imports
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'module' }
  }
];
