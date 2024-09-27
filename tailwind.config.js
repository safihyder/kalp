/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop':'980px',
        'tablet':'730px',
        'phone':'700px',
      }
    },
  },
  plugins: [],
}

