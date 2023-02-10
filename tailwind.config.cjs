/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        peach: "#fdf4d8",
        primary: {
          800: "#2B4435",
          600: "#4F7F71",
          400: "#99B8A3",
          200: "#D0DFD5",
        },
        secondary: {
          600: "#C7CBD0",
          400: "#E3EAF3",
          200: "#F3F8FF",
        },
      },

      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "3xl": "32px",
        xl: "20px",
        lg: "18px",
        base: "16px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
