/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f25f70',
          light: '#f25f70e6',
          dark: '#c14c59'
        },
      }
    }
  },
  plugins: []
}