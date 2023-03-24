/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main': '#fbf1c7',
        'main-dark': '#282828',
        'button': '#689d6a',
        'button-dark': '#689d6a'
      }
    },
  },
  plugins: [],
}
