/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      primary: '#631D76',
      secondary: '#C4D7F2',
      accent: '#99D5C9',
      white: '#FCFCFC',
      black: '#111014',
    },
  },
  variants: {},
  plugins: [],
}
