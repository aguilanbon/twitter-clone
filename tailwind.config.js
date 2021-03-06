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
        'twitterhvgray' : '#202327',
        'twitterhover' : '#00394e',
        'twitterbluehover' : '#0e80cc'
      },
      height: {
        '128': '50.5rem',
        '100': '34rem'
      },
      width: {
        '128': '59rem',
        '100': '30rem',
        'tcard': '32rem',
        'modal': '34rem'
      },
      fontSize: {
        'xxs' : '.70rem',
        'xxxs' : '.55rem',
        'xsm' : '.95rem'
      },
      screens: {
        'mobile': '320px' 
      },
      boxShadow: {
        'twitter': '0 0 7px -1px rgba(0, 0, 0, 0.3)'
      }
      
    },
  },
  plugins: [],
}