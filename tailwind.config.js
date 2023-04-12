/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7895B2",
        secondary: '#AEBDCA',
        background: '#F5EFE6',
        beige: '#E8DFCA',
        bright: "#88A4C2",
        anchor: '#5865CF'
      }
    },
  },
  plugins: [],
}

