import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1340px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "SF Pro",
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "SF Mono", "Menlo", "Consolas", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        apple: {
          blue: "#0071E3",
          "blue-hover": "#0077ED",
          "blue-dark": "#2997FF",
          "bg-light": "#FFFFFF",
          "bg-dark": "#000000",
          "card-light": "#F5F5F7",
          "card-dark": "#161617",
          "text-light": "#1D1D1F",
          "text-dark": "#F5F5F7",
          "subtext-light": "#6E6E73",
          "subtext-dark": "#86868B",
          gray: "#86868B",
          "gray-light": "#F5F5F7",
          "gray-dark": "#1D1D1F",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        "3xl": "1.75rem",
        "2xl": "1.25rem",
        xl: "1rem",
        lg: "0.75rem",
      },
      boxShadow: {
        apple: "0 12px 40px rgba(0, 0, 0, 0.08)",
        "apple-dark": "0 12px 40px rgba(0, 0, 0, 0.4)",
        "apple-hover": "0 20px 60px rgba(0, 0, 0, 0.12)",
        "apple-glow": "0 0 50px rgba(0, 113, 227, 0.25)",
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.022em",
        tight: "-0.011em",
      },
      keyframes: {
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      animation: {
        "shimmer-slide": "shimmer-slide 2.5s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
