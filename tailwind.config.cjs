/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
    },
  },
  plugins: [],
};

//eg. bg-primary-800 // text-primary-800 // bg-primary-800
