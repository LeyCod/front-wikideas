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
      'navbar-text': '#001b4d',
      'bg-footer': '#001b4d',
      'buttons': '#377dff',
      'nabvar-active': '#377dff',
      'alternative': '#ea5e60',
      'selected': '#fff',
      'image-home': '#a2d2ff',

    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    fontSize: {
      titleSize: '2.875rem',
      subtitleSize: '1.5rem',
      cardsSize: '1.313rem',
      normalText: '1rem',
      smallText: '0.87rem'
    }
  },
  plugins: [],
}
