/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        russonOne: ["Russon One"],
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"]
      },
      colors: {
        royalBlue: "#4169e1",
        darkBlue: "#0d1117",
        dark: "#0d1117",
      }
    },
    backgroundImage: {
      wrapperBg: "url('assets/images/wrapperBackground.svg')",
      wrapperDark: "url('assets/images/wrapperDark.svg')",
    },
    container: {
      screens: {
        sm: "640px",
        md: "767px",
        lg: "1140px",
        xl: "1440px",
        "2xl": "1800px", //custom breakpoint
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // @media (max-width: 1535px) { ... }

      xl: { max: "1279px"},

      lg: { max: "1023px"},

      md: { max: "767px"},

      sm: { max: "639px"},
    },
  },
  plugins: [],
}

