require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['unused-imports', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },

  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    'no-undef': 0,
    'no-control-regex': 0,
    'no-useless-escape': 0,
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'no-unused-vars': 0,
    'vue/no-parsing-error': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/ban-types': 0,
    'unused-imports/no-unused-imports-ts': 2,
    '@typescript-eslint/no-unused-vars': 0
  }
}
