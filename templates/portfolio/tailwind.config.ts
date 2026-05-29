import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f9f7f4",
        surface: "#f0ede8",
        "bg-hover": "#e8e4dd",
        primary: "#1c1917",
        secondary: "#78716c",
        accent: "#9a7235",
        "accent-light": "#c9a96e",
        border: "#dcd8d2",
        "border-hover": "#b8b3ac",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        ui: ["var(--font-dm-mono)", "monospace"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
