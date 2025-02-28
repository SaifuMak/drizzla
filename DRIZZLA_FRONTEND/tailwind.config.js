/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'border-ash' : '#454256',
      },
      fontFamily: {
        acumin: ['Acumin Variable Concept', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

