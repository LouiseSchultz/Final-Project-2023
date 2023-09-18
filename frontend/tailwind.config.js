/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#78716c",

  //         secondary: "#a16207",

  //         accent: "#9a3412",

  //         neutral: "#2b3440",

  //         "base-100": "#ffffff",

  //         info: "#d97706",

  //         success: "#3f6212",

  //         warning: "#0f766e",

  //         error: "#881337",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("daisyui")],
};