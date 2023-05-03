/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: "#3E3B4F",
        secondary: "#89B0AE",
        pink: "#F4ACB7",
        gWhite: "#F7F7FF",
        white: '#FDFDFD',
        purple: '#5c16c5',
        purpleHover: '#9147ff',
        buttonHover: 'hsla(240,7%,70%,.35)',
        darkGray: '#EFEFF1',
        lightGray: '#F7F7F8',
      }
    },
  },
  plugins: [],
};
