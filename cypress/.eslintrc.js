module.exports = {
  extends: ['../.eslintrc',],
  plugins: ['cypress'],
  env: {
    'cypress/globals': true,
  },
  // TODO: change first two to error and fix.
  rules: {
    'cypress/no-assigning-return-values': 'warn',
    'cypress/no-unnecessary-waiting': 'warn',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'require-data-selectors': 'off',
  },
}
