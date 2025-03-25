/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border-ash': '#454256',
        'custom-purple': '#1C0337',
        'custom-hover-purple': '#5005A3',
        'custom-green' : '#132C03',
        'custom-hover-green' : '#368505',
        'custom-teal' : '#03343E',
        'custom-hover-teal' : '#067C93',
        'custom-brown' : '#390323',
        'custom-hover-brown' : '#8E0557',
        'custom-navy-blue' : '#042541',
        'custom-hover-navy-blue' : '#055090',
        'custom-blue' : '#040F3F',
        'custom-hover-blue' : '#041C8B',
        'active-nav-color' : '#B673FF',
        'logo-blue' : '#29B5E7',


      },
      fontSize: {
        'lg-custom': ['18px', { lineHeight: '1.5' }], // Custom size with line height
      },
      

      fontFamily: {
        acumin: ['Acumin Variable Concept', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

