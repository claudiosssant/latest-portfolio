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
        ink: "#10131a",
        mist: "#f5f1e8",
        sand: "#ebe4d8",
        accent: "#8f1d2c",
        accentSoft: "#f05a6a",
        slateWarm: "#d9d0c1",
      },
      boxShadow: {
        panel: "0 24px 90px rgba(16, 19, 26, 0.12)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Inter", "Segoe UI", "sans-serif"],
        display: ["Sora", "Avenir Next", "Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top right, rgba(240, 90, 106, 0.18), transparent 30%), radial-gradient(circle at bottom left, rgba(143, 29, 44, 0.22), transparent 28%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
