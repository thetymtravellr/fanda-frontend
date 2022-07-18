/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
        "6rem": "6rem",
        "7rem": "7rem",
        "8rem": "8rem",
        "9rem": "9rem",
        "10rem": "10rem",
        "11rem": "11rem",
        "12rem": "12rem",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'caveat': ['Caveat', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#60a5fa",
          secondary: "#c95a00",
          accent: "#ce6012",
          neutral: "#2B2636",
          "base-100": "#FFFFFF",
          info: "#2B4EE9",
          success: "#13776A",
          warning: "#EBC61E",
          error: "#F72C08",
        },
      },
    ],
  },
};
