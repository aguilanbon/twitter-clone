/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#000000'
      },
      height: {
        '128': '50.5rem',
      },
      width: {
        '128': '59rem'
      }
      
    },
  },
  plugins: [],
}