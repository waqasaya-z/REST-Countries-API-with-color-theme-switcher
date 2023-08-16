/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    display: ["responsive", "dropdown"],
  },
  plugins: [require("tailwindcss-dropdown")],
};
