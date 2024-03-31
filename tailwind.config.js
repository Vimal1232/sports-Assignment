/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgrounddark: "#292B32",
        backgroundlight: "#F7F7F8",
        cardbgdark: "#3B3E47",
        cardbgLight: "#FFFFFF",
        moredark: "#292B32",
        textdark: "#DFDFDF",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        vmd: "930px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
