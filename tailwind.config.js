/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#1c1c3c",
        "mx-yellow": "#e6a802",
        "light-mx-yellow": "#fbd73b",
      },
    },
  },
  plugins: [],
};
