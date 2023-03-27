/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "body-bg": "url('assets/images/body-background.jpg')",
        "section-bg": "url('assets/images/section-bg.jpg')"
      }
    },
  },
  plugins: [],
}
