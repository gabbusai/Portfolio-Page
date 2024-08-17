/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dmSans': ['DM Sans', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'spaceMono': ['Space Mono', 'monospace'],
        'roboto' : ['Roboto', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
