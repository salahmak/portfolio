/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bone: "#EDEAE4",
        ink: "#111110",
        accent: "var(--accent)",
        stamp: "#66635E",
        primary: "#2438E8",
        dark: "#111110",
        light: "#EDEAE4",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        hard: "4px 4px 0 0 #111110",
        "hard-sm": "2px 2px 0 0 #111110",
        "hard-lg": "8px 8px 0 0 #111110",
        "hard-accent": "4px 4px 0 0 #2438E8",
        "hard-bone": "4px 4px 0 0 #EDEAE4",
        "hard-bone-sm": "2px 2px 0 0 #EDEAE4",
        "hard-bone-lg": "8px 8px 0 0 #EDEAE4",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
