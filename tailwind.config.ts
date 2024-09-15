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
        background: "var(--background)",
        foreground: "var(--foreground)",
        topbar: "var(--topbar)",
        container: "var(--container)",
        hovertoptext: "var(--hovertoptext)",
      },
      screens: {
        s375: "375px",
        s425: "425px",
        s720: "720px",
        s768: "768px",
        s1024: "1024px",
        s1280: "1280px",
        s1366: "1366px",
        s1440: "1440px",
        s1920: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
