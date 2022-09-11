/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      orange: '#E16330',
      blue: '#5BBADC',
      black: '#000',
      white: '#fff',
    },
    fontFamily: {
      'edit-regular': ['edit-regular', 'sans-serif'],
      'edit-italic': ['edit-italic', 'sans-serif'],
    },
    fontSize: {
      '10vw/1.1': ['10vw', '1.1'],
      '28px/1': ['28px', '1'],
    },
    extend: {},
  },
  plugins: [],
}
