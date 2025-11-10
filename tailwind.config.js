/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ABB4',
          100: '#e6f6f7',
          400: '#4dd4db',
          500: '#00ABB4',
          600: '#009aa3',
          700: '#00818a',
          800: '#006971',
          900: '#005057',
          dark: '#008b94'
        },
        secondary: '#232323',
        'light-gray': '#f4f4f4',
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 75s linear infinite',
      }
    },
  },
  plugins: [],
}
