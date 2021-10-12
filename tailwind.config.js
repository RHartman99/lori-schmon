module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        wild: ["Stay Wild", "serif"],
      },
      zIndex: {
        behind: -1,
      },
      colors: {
        primary: "#05c2c2",
        bright: "#69fefc",
        dark: "#06585b",
        gray: "#040404",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
