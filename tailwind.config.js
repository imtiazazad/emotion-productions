/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF574B",
          "secondary": "#FF556B",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#ffff",
          "info": "#171717",
          "success": "#36D399",
          "warning": "#1d1d1d",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")]
}