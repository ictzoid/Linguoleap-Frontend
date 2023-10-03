/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#713586",
        secondaryColor: "#FF7536",
        grayScale: "#616161",
        grayScale2: "#B0B0B0",
        neutral: "#121212",
      },
      height: {
        fourHundredPixels: "200px",
        thirtySixPixels: "36px",
        fourtypx: "40px",
        oneThirtyPixels: "130px",
        nineteen: "19px",
        fourtyTwopx: '42px',
        fourtyFivepx: '45px',
      },

      width: {
        oneFiftyPixels: "150px",
        threeSixtySix: "366px",
        threeNintyFivepx: "395px",
        threeHundred: "300px",
        nineteen: "19px"
      },

      fontSize: {
        thirtytwoPixels: "32px",
        thirtyPixels: "30px", 
      },

      boxShadow: {
        'text': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },

    },
  },
  plugins: [],
};
