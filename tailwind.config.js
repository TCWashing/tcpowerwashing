const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {

        '8xl': '88rem',
        '9xl': '96rem',
      },
      screens: {
        'md': '905px',
        "3xl": "1700px",
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        metBold: ["metBold", ...defaultTheme.fontFamily.sans],
        metSemiBold: ["metSemiBold", ...defaultTheme.fontFamily.sans],
        metMedi: ["metMedi", ...defaultTheme.fontFamily.sans],
        metReg: ["metReg", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FFFF",
        background: "#030301",
        aqua: "#51D2E4",
        btnBg: "#030301",
        disabledBtnTxt: "#474746",
        disabledBtnTxtSecondary: "#C2C2C2",
        btnBorder: "#2B2B2A",
        darkPlansPrice: "#545452",
        plansPrice: "#AEAEAE",
        plansNameBorder: "#D6D6D6",
        faqIconDisabled: "#545452",
        offwhite: "#A4A4A4",
        secondary: "#7C7C7B",
        secondaryLight: "#90908F",
        listIcon: "#EBEBEB",
        darkListIcon: "#171715",
        navIcon: "#414242",
        iconFg: "#4D4D4C",
        iconBg: "#2B2B2A",
        faqTxt: "#8E8E8D",
        current: "currentColor",
      },
    },
  },
};
