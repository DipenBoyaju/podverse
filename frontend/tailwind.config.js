/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamilt: {
        poppins: ["Poppins", "serif"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#220b13",
        secondary: "#0D0E13",
        tertiary: "#0D0E13",

      }
    },
  },
  plugins: [],
}

