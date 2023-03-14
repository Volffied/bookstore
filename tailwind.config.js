/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'primary':'#FAFAFA',
        'secondary': '#202120',
        'tertiary': '#D9F9DA',
        'fourth': '#FAF5EE',
      },
      backgroundColor:{
        'primary':'#FAFAFA',
        'secondary': '#202120',
        'tertiary': '#D9F9DA',
        'fourth': '#FAF5EE',
        'fifth': '#F1F5F9'
      },
      borderColor:{
        'primary':'#FAFAFA',
        'secondary': '#202120',
        'tertiary': '#D9F9DA',
      },
      outlineColor: {
        'primary':'#FAFAFA',
        'secondary': '#202120',
        'tertiary': '#D9F9DA',
      },
      textDecorationColor:{
        'primary':'#FAFAFA',
        'secondary': '#202120',
        'tertiary': '#D9F9DA',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
