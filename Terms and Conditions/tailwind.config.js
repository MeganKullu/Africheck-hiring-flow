/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      colors: {
      'blue': '#007DFF',
      'light-blue':'#D1E8FF'
    }},
  },
  plugins: [require("@tailwindcss/forms")],
}

