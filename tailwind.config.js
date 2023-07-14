/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NekstMedium: ["Nekst-medium"],
        NekstSemiBold: ["Nekst-Semibold"],
        NekstBold: ["Nekst-Bold"],
        NekstRegular: ["Nekst-Regular"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
