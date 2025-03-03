import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CFF2D4",
        dark_primary: "#57975D",
      },
      backgroundImage: {
        hero_bg_image: "url('/img/hero-bg-image.png')",
      },
      screens: {
        "2xl": "1536px",
        xl: "1280px",
        sxl: "1100px",
        lg: "1024px",
        slg: "900px",
        md: "768px",
        smd: "576px",
        sm: "445px",
        xsm: "375px",
      },
      boxShadow: {
        custom: "0px 0px 35px -1px #DBDBDB91",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
