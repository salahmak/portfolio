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
        accent: "#FF4D00",
        stamp: "#8A8782",
        primary: "#FF4D00",
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
        "hard-accent": "4px 4px 0 0 #FF4D00",
        "hard-bone": "4px 4px 0 0 #EDEAE4",
        "hard-bone-sm": "2px 2px 0 0 #EDEAE4",
        "hard-bone-lg": "8px 8px 0 0 #EDEAE4",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        blink: "blink 1.6s step-end infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
