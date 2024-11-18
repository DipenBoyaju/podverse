/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#220b13",
        secondary: "#ff196e",
        tertiary: "#ff759f",

      }
    },
  },
  plugins: [],
}

