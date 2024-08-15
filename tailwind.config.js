/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F1621",
        },
        secondary: {
          DEFAULT: "#108a00",
        },
        gold: { DEFAULT: "#D3BB8A" },
        light:{ DEFAULT: "#D6DBE4" },
        vlight:{ DEFAULT: "#F2F3F5" },
        bluedark:{ DEFAULT: "#47505F" },
        vbluedark:{ DEFAULT: "#2f3640" },
        vvbluedark:{ DEFAULT: "#1D2531" },
      },
    },
  },
  plugins: [],
};
