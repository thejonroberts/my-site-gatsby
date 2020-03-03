module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
  },

  plugins: [
    'react',
    'jsx-a11y'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
  ],
  ignorePatterns: [
    'node_modules/**/*',
    'public/**/*',
  ],

  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: 0.53 // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set,
      // any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      {property: 'myFavoriteWrapper'}
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to= url  />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ],
  },

  rules: {
    strict: 0,
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': ["error", { "argsIgnorePattern": "^_" }]
  }
}
