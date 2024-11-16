/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
  grayk: "#464545",
  goldk: "#FFC700",
  blackk: "#282828"
},
fontFamily: {
  rubik: ['Rubik', 'sans-serif'],
},
boxShadow: {
     better: "0px 13.33px 25px 4.17px #0000001F",
     newsletter: "0px 16px 30px 5px #0000001F",
     hero: " 0px 16px 30px 5px #0000001F",
     header:"0px 16px 30px 5px #0000001F",
     butttonOne: "0px 16px 30px 5px #0000001F"
}

    },
  },
  plugins: [],
}


