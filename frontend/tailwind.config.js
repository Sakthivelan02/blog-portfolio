/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        night: "#08090C",   // page background
        panel: "#101218",   // cards
        raised: "#171A22",  // hover / inputs
        line: "#232733",    // borders
        snow: "#ECEEF4",    // main text
        mist: "#8B93A7",    // secondary text
        volt: { DEFAULT: "#C6F54A", dark: "#A9D92F" }, // accent
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.6s ease-out both" },
    },
  },
  plugins: [],
};
