/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0D6137',
          DEFAULT: '#266243',
          light: '#EAEEE3',
          forest: '#051C14',
          lime: '#D4F05B',
        },
        accent: {
          DEFAULT: '#FBD965',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

