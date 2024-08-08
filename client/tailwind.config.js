/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "400px",
    },
    extend: {
      backgroundImage: {
        "bg-math":
          "url('https://static.vecteezy.com/system/resources/thumbnails/013/115/384/small_2x/cartoon-maths-elements-background-education-logo-vector.jpg')",
      },

      keyframes: {
        colorfull: {
          "0%,100%": {},
        },
      },
    },
  },
  plugins: [],
};
