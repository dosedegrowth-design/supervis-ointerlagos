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
      },
      keyframes: {
        pulseZap: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37,211,102,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
