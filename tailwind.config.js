/** @type {import('tailwindcss').Config} */

const colors = {
  // Dark Mode Elements
  "dark-blue": "hsl(209, 23%, 22%)",

  // Dark Mode Background
  "very-dark-blue-bg": "hsl(207, 26%, 17%)",

  // Light Mode Text
  "very-dark-blue-text": "hsl(200, 15%, 8%)",

  // Light Mode Input
  "dark-gray": "hsl(0, 0%, 52%)",

  // Light Mode Background
  "very-light-gray-bg": "hsl(0, 0%, 98%)",

  // Dark Mode Text & Light Mode Elements
  white: "hsl(0, 0%, 100%)",

  // Dark Mode Input
  "dark-input": "hsl(0, 0%, 85%)",

  // Black Color
  black: "#000",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        ...colors,
      },
      colors: {
        ...colors,
      },
      fontSize: {
        sm: "14px", // Homepage Items
        md: "16px", // Detail Page
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans"],
      },
      fontWeight: {
        300: 300,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
