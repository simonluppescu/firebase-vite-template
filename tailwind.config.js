/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Something here", "sans-serif"],
      brand: ["Some font name here", "sans-serif"]
    },
    extend: {}
  },
  plugins: []
};
