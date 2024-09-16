import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(popover|button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        topbar: "var(--topbar)",
        container: "var(--container)",
        hovertoptext: "var(--hovertoptext)",
        tooltip: "var(--tooltip)",
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
  plugins: [nextui()],
};
export default config;
