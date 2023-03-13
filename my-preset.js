/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00C0FF",
        secondary: "#2C3246",
        "primary-black": "#040612",
        "theme-dark-gray": "#2C2C2C",
        "theme-gray": "#788190",
      },
      fontFamily: {
        jakarta: ["Jakarta Sans", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
};
