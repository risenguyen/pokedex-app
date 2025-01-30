/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SFPro: ["'SF Pro'", "sans-serif"],
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(156px, 1fr))",
      },
    },
  },
  plugins: [],
};
