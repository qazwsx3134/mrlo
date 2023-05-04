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
        orangeHover: '#E87843',
        buttonHover: 'hsla(240,7%,70%,.35)',
        darkGray: '#EFEFF1',
        lightGray: '#F7F7F8',
        orange: {
          100: "#ffeddd",
          200: "#ffdbbb",
          300: "#ffc89a",
          400: "#ffb678",
          500: "#ffa456",
          600: "#cc8345",
          700: "#996234",
          800: "#664222",
          900: "#332111"
        },
      }
    },
  },
  plugins: [],
};
