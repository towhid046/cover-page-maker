/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["'Titillium Web'", 'sans-serif'],
        roboto: ["'Roboto'", 'sans-serif'],
        poppins: ["'Poppins'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
