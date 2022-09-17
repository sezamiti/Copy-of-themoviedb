/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tmdbDarkBlue: "rgb(3,37,65)",
        tmdbLightGreen: "rgb(30,213,169)",
        tmdbLightBlue: "rgb(1,180,228)",
      },
      backgroundImage: {
        banner:
          "linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url('/src/components/assets/header_back.jpg')",
      },
    },
  },
  plugins: [],
};
