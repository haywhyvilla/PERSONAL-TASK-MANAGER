/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000112",
        secondary: "#f4f7fd",
        btn: "#635fc7",
        darkbg: "#20212c",
        darkboxbg: "#2b2c37",
      },
    },
  },
  plugins: [],
};
