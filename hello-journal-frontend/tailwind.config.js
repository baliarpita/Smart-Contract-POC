// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-klipsan': 'linear-gradient(to bottom right, #8e2de2, #f27121)',
      },
    },
  },
  plugins: [],
}
