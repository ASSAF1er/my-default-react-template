/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14a800",
        },
        secondary: {
          DEFAULT: "#108a00",
        },
      },
    },
  },
  plugins: [],
};
