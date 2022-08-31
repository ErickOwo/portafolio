/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
      'mono': ['monospace', 'SFMono-Regular'],
      'lato': ['Lato', 'sans-serif']
    },
    colors: {
      ...colors
    }
  },
  plugins: [],
}
