/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#713586",
        secondaryColor: "#FF7536",
        inputGrey: "#616161",
        secInputGrey: "#5F5757",
        blackNeutral: "#121212",
        inputSuccess: "#0F6E0D",
        inputError: "#F31623",
      },
      height: {
        fourHundredPixels: "200px",
      },
      fontFamily: {
        lexend: "Lexend",
        montserrat: "Montserrat",
      },
      borderRadius: {
        fourPx: "4px",
      },
    },
  },
  plugins: [],
};
