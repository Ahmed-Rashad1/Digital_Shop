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
      colors: {
        primary: "#0A5C99",
        secondary: "#79D70A",
        myBlack: "#02111D",
        myWhite: "#FCFDFD",
        MyTextGray: "#434E58",
        MyTextLiteGray: "#DDDDDD",
        MyGray: "#66707A",
        MyDarkBlue: "#042036",
      },
    },
  },
  plugins: [],
};
export default config;
