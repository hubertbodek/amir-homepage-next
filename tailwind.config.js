/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2130',
          100: '#0C2736',
        },
        secondary: {
          DEFAULT: '#0177B3',
          100: '#0ea5e9',
        },
        tertiary: {
          DEFAULT: '#73450E',
          100: '#733410',
          200: '#592411',
          300: '#40170E',
          400: '#260A07',
        },
        light: '#EDEDED',
      },
      boxShadow: {
        'inner-lg': 'inset -1px 2px 3px 0 rgba(0, 0, 0, 0.2)',
        'inner-xl': 'inset -1px 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
