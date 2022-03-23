module.exports = {
  mode: "jit",
  purge: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: { blue_600: "#1c93e3", white_A700: "#ffffff" },
      fontFamily: { sfprodisplay: "SF Pro Display" },
      fontSize: {
        fs18: "18px",
        fs20: "20px",
        fs23: "23px",
        fs27: "27px",
        fs31: "31px",
        fs35: "35px",
        fs42: "42px",
        fs47: "47px",
        fs76: "76px",
        fs87: "87px",
        fs98: "98px",
        fs117: "117px",
        fs131: "131px",
      },
      opacity: { op5: 0.5 },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
