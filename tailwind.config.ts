import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  "#f0fafa",
          100: "#d5f0f0",
          200: "#aadfe0",
          300: "#72c8ca",
          400: "#3daaad",
          500: "#238b8e",
          600: "#1a6f72",
          700: "#175a5c",
          800: "#174a4c",
          900: "#163e40",
        },
        brand: {
          primary: "#238b8e",
          light:   "#f0fafa",
          dark:    "#174a4c",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
