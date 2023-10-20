/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        _borderColor: "#E8E8E8",
        _textLightGray: "#A7A7A7",
        _gray: "#A4A4A4",
        _lightGray: "#F8F8F8",
        _main: "#5932EA",
        _lightBlack: "#0C0C0D",
        _borderGray: "#E0E0E0",
        _borderColor: "#ECEEF6",

        _cardColor: "#343434",
        _green: "#0B8A00",
        _bgGreen: "#23c10a",
        _danger:"#C71026",
        _bgDanger:"#c10a0a26",

        _card: "#949494",

        _gbColor: "#F8FAFB",
      },
    },
  },
  plugins: [],
};
