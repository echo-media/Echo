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
      backgroundImage: {
        "liked": "url('/src/assets/liked.svg')",
        "unliked": "url('/src/assets/heart.svg')",
        "unlikedHover": "url('/src/assets/unlikedHover.svg')",
        "trash": "url('/src/assets/trash.svg')",
        "echo": "url('/src/assets/waveform-path.svg')",
        "share": "url('/src/assets/share-square.svg')",
        "newpost": "url('/src/assets/add.svg')",
      }
    },
  },
  plugins: [],
}

