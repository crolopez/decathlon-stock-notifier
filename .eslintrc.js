module.exports = {
  root: true,

  env: {
    node: true,
  },

  plugins: [
    '@typescript-eslint',
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    quotes: ['warn', 'single'],
    'prefer-template': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/camelcase': 'off'
  },

  parser: '@typescript-eslint/parser',

  overrides: [
    {
      files: [
        '**/tests/**/*',
      ],
      env: {
        jest: true,
      },
    },
  ],
}