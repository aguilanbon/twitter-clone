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
        'twittergray' : '#71767B',
        'twitterwhite' : '#EFF3F4',
        'twitterborder' : '#2F3336',
        'twitterbggray' : '#16181C',
        'twitterhover' : '#00394e'
      },
      height: {
        '128': '50.5rem',
      },
      width: {
        '128': '59rem',
        '100': '30rem'
      },
      fontSize: {
        'xxs' : '.70rem',
        'xxxs' : '.55rem'
      }
      
    },
  },
  plugins: [],
}