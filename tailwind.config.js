/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Warm paper surface, ink text, one accent used sparingly.
        paper: {
          DEFAULT: "#F6F3EC",
          dim: "#EFEBE1",
          muted: "#C9C2B4", // on ink: 9.9:1
        },
        ink: {
          DEFAULT: "#1A1815", // on paper: 15.9:1
          muted: "#5C554A", // on paper: 6.6:1
          line: "#DCD5C8",
        },
        accent: {
          DEFAULT: "#B33A16", // on paper: 5.4:1
          soft: "#E9835B", // on ink: 6.6:1
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "Cambria", "serif"],
        sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "76rem",
        measure: "46rem",
      },
      letterSpacing: {
        label: "0.16em",
      },
    },
  },
  plugins: [],
};
