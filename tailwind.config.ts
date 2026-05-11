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
        accent: "#ca8a04",
        accentSoft: "#f3c969",
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
          "radial-gradient(circle at top right, rgba(243, 201, 105, 0.2), transparent 30%), radial-gradient(circle at bottom left, rgba(151, 120, 44, 0.22), transparent 28%)",
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
