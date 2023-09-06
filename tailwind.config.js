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
        primary : '#57385c',
        secondary :' #a75265',
        third : '#ec7263',
        fourth : '#febe7e',
      }
    },
  },
  plugins: [],
}

