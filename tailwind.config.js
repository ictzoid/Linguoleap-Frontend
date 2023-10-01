/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#713586",
        secondaryColor: "#FF7536",
      },
      height: {
        fourHundredPixels: "200px",
      },
    },
  },
  plugins: [],
};
