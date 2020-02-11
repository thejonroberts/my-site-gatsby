const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.jsx'],

  // regular expression for css classes: NOTE: Node.js 9.11.2 and above only
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
})
