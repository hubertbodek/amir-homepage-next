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
        tertiary: '#BD713F',
        light: '#EDEDED',
      },
    },
  },
  plugins: [],
}
