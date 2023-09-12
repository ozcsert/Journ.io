/** @type {import('tailwindcss').Config} */
export default  {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        primary : '#a75265',
        secondary :' #57385c',
        third : '#febe7e',
        fourth : '#ec7263 ',
      },
      fontFamily: {
        akaya: ['Akaya Teliviga'],
        satisfy : ['Satisfy']
      }
    },
  },
  plugins: [],
}

//primary : '#57385c',
//secondary :' ',
//third : '',
//fourth : '',