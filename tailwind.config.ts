import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      beige: {
        100: "#F8F4F0",
        500: "#98908B",
      },
      grey: {
        100: "#F2F2F2",
        300: "#B3B3B3",
        500: "#696868",
        900: "#201F24",
      },
      green: "#277C78",
      yellow: "#F2CDAC",
      cyan: "#82C9D7",
      navy: "#626070",
      red: "#C94736",
      purple: "#826CB0",
      "purple-light": "#AF81BA",
      turquoise: "#597C7C",
      brown: "#93674F",
      magenta: "#934F6F",
      blue: "#3F82B2",
      "navy-grey": "#97A0AC",
      "army-green": "#7F9161",
      gold: "#CAB361",
      orange: "#BE6C49",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Public Sans", "sans"]
    },
    fontSize: {
      1: ["32px", "38.4px"],
      2: ["20px", "24px"],
      3: ["16px", "24px"],
      4: ["14", "21px"],
      5: ["12px", "18px"],
    },
    // spacing: {
    //   50: "4px",
    //   100: "8px",
    //   150: "12px",
    //   200: "16px",
    //   250: "20px",
    //   300: "24px",
    //   400: "32px",
    //   500: "40px",
    // }
  },
  plugins: [],
};
export default config;
