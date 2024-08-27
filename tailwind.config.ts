import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primaryBg: "rgb(var(--primary-bg))",
        primaryText: "rgb(var(--primary-text))",
        secondaryBg: "rgb(var(--secondary-bg))",
        accent: "rgb(var(--accent))",
      },
    },
  },
  plugins: [],
};
export default config;
