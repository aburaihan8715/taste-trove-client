/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1fefc2",

          secondary: "#ccf2ff",

          accent: "#5fcc3b",

          neutral: "#252B32",

          "base-100": "#F5F4F5",

          info: "#77BCDF",

          success: "#197B6F",

          warning: "#EDC754",

          error: "#C2410C",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
