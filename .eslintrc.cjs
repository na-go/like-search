module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {},
}
