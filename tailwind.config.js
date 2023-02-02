module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "960px",
      lg: "1394px",
      fullLg: "1920px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        dark: "#363636",
        grey: "#EAEAEA",
      },
      boxShadow: {
        "dp-1": "0px 8px 24px rgba(0, 0, 0, 0.05);",
      },
    },
    fontFamily: {
      sans: ['"Montserrat"', "sans-serif"],
    },
  },
  plugins: [],
};
