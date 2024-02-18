/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3563E9',
        secondary: '#424242',
        darkdarkgray: '#191F28',
        tprimary: '#757575',
        tsecondary: '#B0B8C1',
        tthird: '#8B95A1',
      },
      fontFamily: {
        pretendard: ['Pretendard'],
      },
    },
  },
  plugins: [],
};
