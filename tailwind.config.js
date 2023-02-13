/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        andrea: {
          primary: "#623B71",
          secondary: "#53599a",
          tertiary: "#f6f5ae",
          accent: "#f76f8e",
          neutral: "#f6f5ae",
        },
        wondersoil: {
          primary: "#548444",
          secondary: "#84a46c",
        },
      },
    ],
  },
}
