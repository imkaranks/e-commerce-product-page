/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          600: 'hsl(220, 13%, 13%)',
          500: 'hsl(219, 9%, 45%)',
          400: 'hsl(220, 14%, 75%)',
          300: 'hsl(223, 64%, 98%)',
        },
        'accent': {
          400: 'hsl(26, 100%, 55%)',
          300: 'hsl(25, 100%, 94%)',
        },
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)'
      },
      fontFamily: {
        'primary': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

