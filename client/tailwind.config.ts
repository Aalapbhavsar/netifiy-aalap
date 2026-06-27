import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        "primary-light": "#60A5FA",
        "primary-dark": "#1D4ED8",
        secondary: "#8B5CF6",
        "secondary-light": "#A78BFA",
        "secondary-dark": "#6D28D9",
        accent: "#38BDF8",
        "accent-light": "#7DD3FC",
        "accent-dark": "#0284C7",
        "bg-base": "#0F172A",
        "bg-surface": "#1E293B",
        "bg-surface-hover": "#334155",
        "bg-surface-light": "#475569",
        "text-primary": "#F8FAFC",
        "text-secondary": "#CBD5E1",
        "text-muted": "#94A3B8",
        "text-disabled": "#64748B",
      },
      borderColor: {
        subtle: "rgba(203, 213, 225, 0.1)",
        medium: "rgba(203, 213, 225, 0.2)",
      },
      spacing: {
        "section-gap": "6rem",
      },
      fontSize: {
        base: "1rem",
      },
      animation: {
        fadeIn: "fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
    fontFamily: {
      heading: ["Poppins", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;
