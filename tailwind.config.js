/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px', 
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        worksans : ['Work Sans']
      },
      boxShadow: {
        '3xl': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      },
      colors: {
        'box': 'rgba( 255, 255, 255, 0.35 )',
        'bordercolor': 'rgba( 255, 255, 255, 0.18 )',
        'ghostwhite': '#CCCCC7',
        'gradient': 'rgba( 255, 255, 255, 0.18 )'
      }
    },
  },
  plugins: [],
}
// '3xl': '6px 8px 13px -1px rgba(0,0,0,0.65)'