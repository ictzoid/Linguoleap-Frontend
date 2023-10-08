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
        onhoverColor:"#A986b6",
        secondary_color: "#ff7536",
        grayColor:"#b0b0b0"
  
      },
      padding: {
        tenPx: "10px",
      },
      height: {
        fourHundredPixels: "200px",
        fourZeroZeroPx:"400px"
      },
      width: {
        threeSixSixPx: "366px",
        fourFiftyPx:"450px",
        threeFiftyPx: "350px"
      },
      fontFamily: {
        lexend: "Lexend",
        montserrat: "Montserrat",
      },
      borderRadius: {
        fourPx: "4px",
      },
      fontSize: {
        pDef: "14px",
        pSm: "16px",
        pLg: "18px",
        h1Def: "32px",
        h1Sm: "44px",
        h1Lg: "56px",
        h2Def: "24px",
        h2Sm: "36px",
        h2Lg: "48px",
        h3Def: "20px",
        h3Sm: "30px",
        h3Lg: "40px",
      },
    },
  },
  plugins: [],
};
