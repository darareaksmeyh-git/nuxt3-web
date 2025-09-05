/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './app/**/*.vue'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px', 
      },
    },
  },
  plugins: [],
}
