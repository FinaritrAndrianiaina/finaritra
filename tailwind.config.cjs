/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily:{
        'mono':['IBM Plex Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
