/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'primary':'#FE5B02',
      'primary2':'#FE8F3C',
      'secondary':'#E1E1E1',
      'secondary2':'#241F21'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
