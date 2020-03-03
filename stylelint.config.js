module.exports = {
  files: ['src/**/*.jsx', 'src/**/*.css'],
  ignoreFiles: ['node_modules/**', 'public/**', '.cache/**', '**/*.png', '**/*.json'],
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
