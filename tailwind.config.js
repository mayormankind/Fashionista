/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBlack: '#383838',
        grayText: '#749FD3',
        lightGray: '#74747C',
        blackText: '#797979',
        browny: '#c2a18a',
        lightBrown: '#F8F3F1',
      },
      fontFamily: {
        nunito: ['"Nunito"', ...defaultTheme.fontFamily.sans],
        rufina: ['"Rufina"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

