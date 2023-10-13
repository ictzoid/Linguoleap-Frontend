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
        grayScale: "#616161",
        grayScale2: "#B0B0B0",
        onhoverColor: "#A986b6",
        secondary_color: "#ff7536",
        grayColor: "#b0b0b0",
      },
      padding: {
        tenPx: "10px",
      },
      height: {
        fourHundredPixels: "200px",
        twoFiftyPx: "250px",
        fourZeroZeroPx: "400px",
        sixtyPx: "60px",
        nintyVh: "90vh",
        eightyVh: "80vh",
        thirtySixPixels: "36px",
        fourtypx: "40px",
        oneThirtyPixels: "130px",
        nineteen: "19px",
        fourtyTwopx: "42px",
        fourtyFivepx: "45px",
      },
      width: {
        threeSixSixPx: "366px",
        threeSixSix: "366px",
        fourFiftyPx: "450px",
        threeFiftyPx: "350px",
        threeFifty: "350px",
        thirtySixPixels: "36px",
        fourtypx: "40px",
        oneThirtyPixels: "130px",
        nineteen: "19px",
        fourtyTwopx: "42px",
        fourtyFivepx: "45px",
        fourHundredPx: "400px",
        oneFiftyPixels: "150px",
        threeNintyFivepx: "395px",
        threeHundred: "300px",
        twoFiftyPx: "250px",
        sixtyPx: "60px",
        hundredPx: "100px",
        threeSixtySix: "366px",
      },

      top: {
        thirtyPercent: "30%",
      },

      left: {
        twentyPercent: "20%",
        thirtyEightPercent: "38%",
      },

      boxShadow: {
        text: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },

      fontFamily: {
        lexend: "Lexend",
        montserrat: "Montserrat",
      },
      borderRadius: {
        fourPx: "4px",
      },
      fontSize: {
        thirtytwoPixels: "32px",
        thirtyPixels: "30px",
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
