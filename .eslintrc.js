module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  rules: {
    semi: 'off',
    'no-shadow': ['off'],
    'no-undef': 'off',
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    exclude: ['node_modules'],
  },
  ignorePatterns: ['./node_modules/**'],
}
