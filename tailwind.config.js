/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#000000',
        'twitterblue' : '#1D9BF0',
        'twittergray' : '#71767B'
      },
      height: {
        '128': '50.5rem',
      },
      width: {
        '128': '59rem'
      },
      fontSize: {
        'xxs' : '.55rem'
      }
      
    },
  },
  plugins: [],
}