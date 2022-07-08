/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-mobile": "url(./public/images/bg-header-mobile.svg)",
        "header-desktop": "url(./public/images/bg-header-desktop.svg)",
      },
      colors: {
        gray: {
          100: "hsl(180, 29%, 50%)",
          200: "hsl(180, 52%, 96%)",
          300: "hsl(180, 31%, 95%)",
          400: "hsl(180, 8%, 52%)",
          500: "hsl(180, 14%, 20%)",
        },
      },
    },
  },
  plugins: [],
};
