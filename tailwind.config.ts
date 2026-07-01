import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-forest":       "var(--brand-forest)",
        "brand-forest-light": "var(--brand-forest-light)",
        "brand-forest-deep":  "var(--brand-forest-deep)",
        "bnb-coral":          "var(--bnb-coral)",
        "bnb-coral-soft":     "var(--bnb-coral-soft)",
        muted: {
          DEFAULT:    "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border:      "var(--border)",
        card:        "var(--card)",
        destructive: "var(--destructive)",
        ring:        "var(--ring)",
      },
      fontFamily: {
        sans:    ["var(--bnb-font-display)", "system-ui", "sans-serif"],
        mono:    ["var(--bnb-font-labels)", "ui-sans-serif", "sans-serif"],
        display: ["var(--bnb-font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "var(--brand-gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
