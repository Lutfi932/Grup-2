/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      columns: {
        "4xs" : "14rem",
      },
      screens: {
        "noscreen" : "1px",
        "mobile" : "480px",
        "3xsm" : "500px",
        "2xsm" : "540px",
        "xsm": "630px", 
        "md2" : "950px",
        "xl" : "1200px",
      }
    },
  },
  plugins: [],
}

