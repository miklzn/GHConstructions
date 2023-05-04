/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ["Catamaran", "sans-serif"],
        almarai: ["Almarai", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      boxShadow: {
        card: "0 2px 12px 0 rgba(20, 20, 43, 0.08)",
      },
    },
  },
  plugins: [],
};
