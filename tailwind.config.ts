import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta institucional Super Visão (extraída do site)
        brand: {
          DEFAULT: "#062264", // azul institucional
          dark: "#011a4a",
          light: "#0e3aa0",
        },
        red: {
          brand: "#d60d12",
          dark: "#940100",
        },
        zap: {
          DEFAULT: "#25D366",
          dark: "#1ebe5a",
        },
        gold: "#FFC400",
      },
      fontFamily: {
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        heading: ["var(--font-lexend)", "system-ui", "sans-serif"],
      },
      animation: {
        pulseZap: "pulseZap 2s infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "pop-in": "popIn 0.35s cubic-bezier(0.18,0.89,0.32,1.28) both",
        "bounce-soft": "bounceSoft 2.2s ease-in-out infinite",
      },
      keyframes: {
        pulseZap: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37,211,102,0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
