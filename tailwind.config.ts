import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
        "3xl": "3000px",
      },
      colors: {
        cyan: "#18D1A1",
      },
      animation: {
        shadowPulse: "shadow-pulse 2s infinite ease-in-out",
      },
      keyframes: {
        "shadow-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 255, 170, 0.6)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 170, 0.9)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
