/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      comforta: ["Comfortaa", "cursive"],
    },
    extend: {
      backgroundSize: {
        "full-auto": "100% auto",
      },
    },
  },
  plugins: [],
};
