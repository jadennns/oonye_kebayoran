module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#fcdeaf",
          2: "#fff2de",
          3: "#2d1a2d",
          4: "#e63f13",
          5: "#ea9d42",
          6: "#2c2ed8",
          7: "#d1ae98",
          8: "#7d7f7a",
        },
      },
      animation: {
        growdown: "growDown 300ms ease-in forwards;",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  variants: {
    lineClamp: ["responsive", "hover"],
  },
};
