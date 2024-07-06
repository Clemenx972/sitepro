import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        primary: {
          true: "#a4c7f1",
          false: "#ef1740",
        },
        secondary: {
          true: "#f8ebf8",
          false: "#f16b64",
        },
        coral: {
          true: "#000000",
          false: "#eee3e1",
        },
        lavender: "#ac8798",
        darkpurple: {
          true: "#ffffff",
          false: "#090a0f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
