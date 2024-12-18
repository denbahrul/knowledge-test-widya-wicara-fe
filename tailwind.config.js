/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueA: "#20558a",
        blueB: "#006dfc",
        green: "#61cf70",
        blackA: "#121212",
      },
    },
  },
  plugins: [],
};
