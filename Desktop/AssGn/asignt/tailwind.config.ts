import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        roam: "roam 3s infinite linear",
      },
      keyframes: {
        roam: {
          "0%, 100%": { transform: "translate(40, 40)" },
          "25%": { transform: "translate(10px, 0px)" },
          "50%": { transform: "translate(0px, 20px)" },
          "75%": { transform: "translate(30px, 70px)" },
          
        },
      },
    },
  },
  plugins: [],
};

export default config;
