import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-container": "rgb(var(--primary-container) / <alpha-value>)",
        "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
        "border-subtle": "var(--border-subtle)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-container-lowest":
          "rgb(var(--surface-container-lowest) / <alpha-value>)",
        "surface-container-highest":
          "rgb(var(--surface-container-highest) / <alpha-value>)",
        "surface-container-high":
          "rgb(var(--surface-container-high) / <alpha-value>)",
        "on-primary-container":
          "rgb(var(--on-primary-container) / <alpha-value>)",
        "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "on-background": "rgb(var(--on-background) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        "surface-container-low":
          "rgb(var(--surface-container-low) / <alpha-value>)",
        "surface-dim": "rgb(var(--surface-dim) / <alpha-value>)",
        "surface-container": "rgb(var(--surface-container) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        unit: "8px",
        "section-gap": "120px",
        gutter: "24px",
        "section-gap-mobile": "64px",
        "container-max": "1200px",
        "margin-mobile": "20px",
      },
      maxWidth: {
        "container-max": "1200px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        "headline-lg": ["var(--font-inter)"],
        "headline-md": ["var(--font-inter)"],
        "body-lg": ["var(--font-inter)"],
        "body-md": ["var(--font-inter)"],
        "display-hero": ["var(--font-inter)"],
        "display-hero-mobile": ["var(--font-inter)"],
        "label-caps": ["var(--font-inter)"],
        "mono-label": ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-hero": [
          "72px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" },
        ],
        "display-hero-mobile": [
          "40px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
        "mono-label": ["13px", { lineHeight: "1.0", fontWeight: "500" }],
        "label-caps": [
          "12px",
          { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
