/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "background": "#050208",
        "primary": "#723ec1",
        "secondary": "#201037",
        "accent": "#7e4ec6",
      },
      textColor: {
        "customtxt": "#f7f3fb"
      },
    },
  },
  plugins: [],
}

