module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F44336",         // red
        secondary: "#2A2A2A",       // dark gray
        accent: "#F1D4A2",          // beige
        info: "#38BDF8",            // blue
        success: "#22C55E",
        warning: "#FACC15",
        error: "#EF4444",
        base: {
          100: "#ffffff",
          200: "#f9f9f9",
          content: "#1F1F1F",
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [], // remove daisyui here
};