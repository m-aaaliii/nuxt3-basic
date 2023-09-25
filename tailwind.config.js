/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        rokkitt: ['Rokkitt', 'serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      })
    },
    function ({ addVariant }) {
      addVariant('mobile-only', "@media screen and (max-width: 767px)"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    },
    function ({ addVariant }) {
      addVariant('Tab-only', "@media screen and (min-width: 768px) and (max-width: 1023px)"); // instead of hard-coded 
    },
    function ({ addVariant }) {
      addVariant('Lap-only', "@media screen and (min-width: 1024px) and (max-width: 1279px)"); // instead of hard-coded 
    },
  ],
}

