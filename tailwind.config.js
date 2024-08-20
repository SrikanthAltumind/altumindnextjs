/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#02194A",
        secondary: "#E42D38",
        tertiary: "#0E0E0E",
        darkTheme: "#0d1015",
        gradientBlue: "#0350F6",
        gradientGreen: "#5EC7A7",
        DarkBackground: "#24272c",
      },
      boxShadow: {
        "custom-shadow": "0 0 4px 2px rgba(0, 0, 0, 0.1)", // Shadow visible from all sides
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

