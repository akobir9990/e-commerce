module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryColor: "#5956CE",
      salePersentBgColor: "#e44542",
      cardItemDescriptionColor: "#474747",
      crossedOutTextColor: "#999999",
    },
    fontFamily: {
      fontBold: `ptRootUI-700`,
      fontMedium: `ptRootUI-500`,
      fontRegular: `ptRootUI-400`,
      fontLight: `ptRootUI-300`,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
