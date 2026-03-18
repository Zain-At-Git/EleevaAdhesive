/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // if you're using HTML
    "./src/**/*.{js,ts,jsx,tsx}", // for Vite + React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#ff5900',
        darkBlue: '#004aad',
        productCaptionBlue: '#0052cc',
        textDarkAlt: '#333',
      },
    },
  },
  plugins: [],
}
