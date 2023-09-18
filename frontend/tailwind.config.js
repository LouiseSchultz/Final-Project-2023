/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#ffa500",
            "secondary": "#f5e5cc",
            "accent": "#ca8a04",
            "neutral": "#eab308",
            "base-100": "#ffffff",
            "info": "#fef3c7",
            "success": "#fed7aa",
            "warning": "#fbbd23",
            "error": "#d97706",
          },
        

      },
    ],
  },
  plugins: [require("daisyui")],
};
