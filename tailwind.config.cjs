/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'title': '#1e2022',
      'subtitle': '#677788',
      'cards': '#001b4d',
      'bg-footer': '#001b4d',
      'buttons': '#377dff',
      'alternative': '#ea5e60',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    fontSize: {
      titleSize: '46px',
      subtitleSize: '24px',
      cardsSize: '21px',
      normalText: '16px'
    }
  },
  plugins: [],
}
