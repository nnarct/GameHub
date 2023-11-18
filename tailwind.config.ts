import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        height: "calc(100vh - 68px - 68px)", // Add your custom minimum height value
      },
    },
  },
  plugins: [],
} satisfies Config;
