/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4461F2",
        lightGray: "#EAF0F7",
        background: "#e5e5e5"
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
};
