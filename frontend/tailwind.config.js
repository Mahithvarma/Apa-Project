/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('./src/assets/bg1.jpg')",
        'admin-bg': "url('./src/assets/admin-bg.jpg')",
      }
    }
  },
  plugins: [],
}

