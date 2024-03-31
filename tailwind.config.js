/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        project: "url('/src/assets/images/GEO_SPHERES 03.png')",
      },
      boxShadow: {
        "3xl": "inset 0px 4px 30px 0px rgba(209, 74, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
