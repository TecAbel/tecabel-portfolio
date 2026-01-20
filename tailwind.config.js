/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: '#F9F8F2',
        'main-dark': '#121612',
        primary: '#8BA888',
        'primary-dark': '#A3BEA1',
        headings: '#2D362E',
        'headings-dark': '#F9F8F2',
        text: '#4A4F4A',
        'text-dark': '#A8B0A8',
        cards: '#E2E8DD',
        'cards-dark': '#1C231C',
        secondary: '#B9B28A',
        'secondary-dark': '#B9B28A',
        button: '#8BA888',
        'button-dark': '#689d6a'
      }
    }
  },
  plugins: []
}
