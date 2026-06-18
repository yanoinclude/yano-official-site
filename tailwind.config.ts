import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["sr-only"],
  theme: {
    extend: {
      colors: {
        island: {
          background: "#F2EFE7",
          surface: "#FBFAF6",
          text: "#22211E",
          muted: "#706A5F",
          wood: "#5A4635",
          lemon: "#D7C43B",
          sea: "#6F8991",
          border: "#D8D2C5",
        },
      },
      fontFamily: {
        heading: [
          "Zen Old Mincho",
          "Yu Mincho",
          "Hiragino Mincho ProN",
          "serif",
        ],
        body: [
          "Zen Kaku Gothic New",
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "sans-serif",
        ],
        accent: ["Cormorant Garamond", "Georgia", "serif"],
      },
      borderRadius: {
        soft: "0.375rem",
      },
      maxWidth: {
        island: "72rem",
        readable: "42rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
