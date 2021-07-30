module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "430px" },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#151829",
          light: "#242424",
        },
        secondary: {
          DEFAULT: "#2F7DE9",
          transparent: "rgba(46, 114, 209, 0.2)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
