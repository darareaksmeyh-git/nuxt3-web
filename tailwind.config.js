/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./app/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
      },
      colors: {
        gold: "#F8E889",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #F8E889 0%, #E4B764 100%)",
        "gray-black": "linear-gradient(to bottom, #5C5C5C 0%, #000000 100%)",
      },
    },
  },
  plugins: [],
};
