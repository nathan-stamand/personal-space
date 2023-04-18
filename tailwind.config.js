const { warn } = require('console');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./store/**/*.{js, ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('assets/images/body-background.jpg')",
        "section-bg": "url('assets/images/section-bg.jpg')",
        "resume-bg": "url('assets/images/resume-bg.jpg')",
      },
      keyframes: {
        'shiftDownRight': {
          "0%, 20%, 75%, 100%": {
            transform: "translate(0px, 0px)"
          },
          "25%, 70%": {
            transform: "translate(15px, 15px)"
          }
        },
        "shiftTopLeft": {
          "0%, 25%, 80%, 100%": { transform: "translate(0px, 0px)" },
          "30%, 75%": { transform: "translate(-15px, -15px)" }
        }
      },
      animation: {
        "shift-dr": "shiftDownRight 4s linear infinite",
        "shift-tl": "shiftTopLeft 4s linear infinite",
      }
    },
  },
  plugins: [],
}
