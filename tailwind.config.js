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
    // screens: {
    //   mobile: "320px",
    //   // => @media (min-width: 320px) { ... }

    //   tablet: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   laptop: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   desktop: "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
};
