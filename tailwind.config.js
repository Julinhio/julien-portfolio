/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Near-white page, white cards, warm grey panels, one red accent.
        page: "#F7F7F5",
        panel: "#F1F0EC",
        ink: {
          DEFAULT: "#141413", // on page: 17.6:1
          soft: "#3A3A37",
          muted: "#62625D", // on page: 5.9:1, on white: 6.3:1
          line: "#E3E2DE",
        },
        accent: {
          DEFAULT: "#D23A22", // on white: 4.8:1, white on it: 4.8:1
          dark: "#B02E18",
          soft: "#FF8A73", // on ink: 7.9:1
        },
        ok: "#1F9D55",
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        shell: "72rem",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
    },
  },
  plugins: [],
};
