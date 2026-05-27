import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#02060a",
        obsidian: "#061017",
        ink: "#091923",
        aqua: "#7de53e",
        moss: "#baff69",
        aurum: "#c8a45d"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(125, 229, 62, 0.22)",
        gold: "0 0 36px rgba(200, 164, 93, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
