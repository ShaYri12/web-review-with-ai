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
    },
  },
  plugins: [],
} satisfies Config;
