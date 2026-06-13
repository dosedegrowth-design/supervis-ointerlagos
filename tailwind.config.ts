import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3fb",
          100: "#d6e2f3",
          700: "#0f2c54",
          800: "#0a2240",
          900: "#06182e",
          950: "#040f1d",
        },
        brand: {
          // azul institucional Super Visão
          DEFAULT: "#0e57b3",
          light: "#2b7de0",
          dark: "#0a3f86",
        },
        zap: {
          DEFAULT: "#25D366",
          dark: "#1ebe5a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        pulseZap: "pulseZap 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
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
