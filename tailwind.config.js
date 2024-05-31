module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#5956CE",
      "primary:hower": "#6a66d3",
      secondary: "#f7f7f7",
      tertiary: "",
      sale: "#e44542",
      white: "#fff",

      /////////////

      "dark-40": "#a6a6a7",
      "dark-60": "#5c5c5c",
      "dark-80": "#333",
      "dark-100": "#000",
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
        1: "1px",
        5: "5px",
      },

      backgroundImage: {
        "hero-bg": "url('./src/assets/images/bg.png')",
      },
    },
    fontSize: {
      20: "20px",
      26: "26px",
      28: "28px",
      40: "40px",
      64: "64px",
    },
  },
  plugins: [],
};
