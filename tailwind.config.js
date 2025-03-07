import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#2a2a5a",
        "mx-yellow": "#e6a802",
        "lt-mx-yellow": "#fbd73b",
        "slate-gray": "#d9d9d8",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        condensed: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
});
