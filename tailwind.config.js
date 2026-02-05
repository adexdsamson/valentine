/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        romantic: {
          red: "#DC143C",
          pink: "#FFB6C1",
          gold: "#FFD700",
          cream: "#FFF8DC",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
