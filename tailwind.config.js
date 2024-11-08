/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Update to include Angular components
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': 'rgb(255, 82, 0)',
      },
      fontFamily: {
        sans: ['ProximaNova', 'Arial', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
