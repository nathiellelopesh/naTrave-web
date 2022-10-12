/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/Card/index.jsx",
    "./src/components/DateSelect/index.jsx",
    "./src/components/Icon/index.jsx",
    "./src/components/Input/index.jsx",
    "./src/pages/index.jsx",
    "./src/pages/Home/index.jsx",
    "./src/pages/Login/index.jsx",
    "./src/pages/SignUp/index.jsx",
    "./src/pages/Dashboard/index.jsx",
    "./src/pages/Profile/index.jsx",
  ],
  //"./src/**/*.{js, ts, jsx, tsx}"
  theme: {
    container: {
      center: true, //center the page
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "18px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["48px", "56px"],
    },
    extend: {
      colors: {
        red: {
          300: "#BB2E57",
          500: "#AF053F",
          700: "#300219",
        },
        black: "#0B0E16",
        white: "#F4F6FF",
        gray: {
          300: "#B1B4BD",
          500: "#91949D",
          700: "#696C74",
        },
      },
    },
  },
  plugins: [],
};
