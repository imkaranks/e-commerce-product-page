/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'neutral': {
        600: 'hsl(220, 13%, 13%)',
        500: 'hsl(219, 9%, 45%)',
        400: 'hsl(220, 14%, 75%)',
        300: 'hsl(223, 64%, 98%)',
      }
    },
    extend: {
      colors: {
        'primary': {
          400: 'hsl(26, 100%, 55%)',
          300: 'hsl(25, 100%, 94%)',
        }
      },
      fontFamily: {
        'primary': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

