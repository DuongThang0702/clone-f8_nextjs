import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        mainColor: "#F16239",
        gradient1: "#7f00ff",
        gradient2: "#2193b0",
        blackOpacity: "rgba(60, 60, 60, .8)",
      },
      fontSize: {
        mainSize: "1.4rem",
      },
      boxShadow: {
        sidebar: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
export default config;
