import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#0B1326",
        sidebar: "#131B2E",
        panel: "#131829",
        "panel-raised": "#161c30",
        border: "#22283c",
        "border-soft": "#1b2135",
        primary: "#f4f5f7",
        secondary: "#9598a8",
        muted: "#6b6f80",
        accent: "#4f8cf7",
        "accent-soft": "#1b2c4d",
        danger: "#f2555a",
        "danger-soft": "#3a1d21",
        success: "#3ecf8e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        md: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
