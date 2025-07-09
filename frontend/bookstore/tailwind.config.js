/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        blackBG: "#f3f3f3",
        Favourite: "#FF5841",
      },
      fontFamily: {
        primary: ["Montserrat"," sans - serif"],
        secondary: ["Nunito Sans", "sans - serif"]
      },
    },
  },
  plugins: [],
};
