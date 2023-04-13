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
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(10px);'
          },
        }
      },
      animation: {
        'bounce-right': 'bounce-right 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

