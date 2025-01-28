/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-1": "#0000002d",
      },
      keyframes: {
        scrollExpand: {
          "0%": {
            width: "0%",
            opacity: "0.5",
          },
          "50%": {
            width: "50%",
            opacity: "0.8",
          },
          "100%": {
            width: "100%",
            opacity: "1",
          },
        },
      },
      animation: {
        scrollExpand: "scrollExpand 0.6s ease-in-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
