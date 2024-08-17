/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
