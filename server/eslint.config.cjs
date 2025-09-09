const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
      globals: {
        require: true,
        module: true,
        exports: true,
        __dirname: true,
        process: true,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    extends: [js.configs.recommended, prettier],
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);
