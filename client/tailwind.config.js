/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custombg": "#050208",
        "custombgbtn1": "#723ec1",
        "custombgbtn2": "#201037"
      },
      textColor: {
        "customtxt": "#f7f3fb"
      },
    },
  },
  plugins: [],
}

