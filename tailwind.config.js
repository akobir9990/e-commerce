module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryColor: "#5956CE",
      salePersentBgColor: "#e44542",
      cardItemDescriptionColor: "#474747",
      crossedOutTextColor: "#999999",
      white: "#fff",
    },
    fontFamily: {
      "pt-root-ui-bold": `ptRootUI-700`,
      "pt-root-ui-medium": `ptRootUI-500`,
      "pt-root-ui-regular": `ptRootUI-400`,
      "pt-root-ui-light": `ptRootUI-300`,
      "montserrat-semibold": `montserrat-600`,
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
