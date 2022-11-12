const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      orange: '#E16330',
      blue: '#5BBADC',
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
    },
    fontFamily: {
      'edit-regular': ['edit-regular', 'sans-serif'],
      'edit-italic': ['edit-italic', 'sans-serif'],
    },
    fontSize: {
      '120px/1.6': ['120px', '1.6'],
      '60px/1.5': ['60px', '1.5'],
      '28px/1': ['28px', '1'],
    },
    extend: {
      keyframes: {
        flyingDutchman: {
          '0%': { transform: 'rotate(11.5deg) translateX(-100%)' },
          '100%': { transform: 'rotate(11.5deg) translateX(110%)' },
        },
      },
      animation: {
        'flying-dutchman': 'flyingDutchman 8s linear forwards infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.gold-bg': {
          'background-image': 'url(/gold.jpg)',
          'background-repeat': 'no-repeat',
          'background-size': '150% ',
          'background-clip': 'text',
          'background-position': 'top right',
        },
        '.page-title-top-tweak': {
          'margin-bottom': '-87px',
          'letter-spacing': '29px',
          'margin-right': '-17px',
        },
        '.page-title-top-tweak-mobile': {
          'margin-bottom': '-38px',
          'letter-spacing': '15px',
          'margin-right': '-7px',
        },
      })
    }),
  ],
}
