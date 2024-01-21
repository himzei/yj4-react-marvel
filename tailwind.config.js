/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#101827",
      },
      fontFamily: {
        "moirai-one": "Moirai One",
      },
      keyframes: {
        scaling: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        scaling: "scaling 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
