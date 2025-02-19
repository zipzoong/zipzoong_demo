import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg_footer: "#303441",
        bg_sub: "#ECF3FF",
        bg_sub2: "#F6F8FA",
        bg_sub3: "#F9FAFB",
        primary: "#3772F7",
        text: "#303441",
        text_sub: "#898989",
        text_sub2: "#1F1F1F",
        sub: "#D9D9D9",
        sub2: "#F6F6F6",
        selectedoption_default: "rgba(88, 155, 255, 0.1)",
        selectedoption_hover: "rgba(88, 155, 255, 0.2)",
        selectedoption_pressed: "rgba(88, 155, 255, 0.26)",
        selectedoption_border: "rgba(88, 155, 255, 0.70)",
        token_bg: "rgba(166, 166, 166, 0.2)",
        token_1: "#FA6B48",
        token_1_bg: "rgba(250, 107, 72, 0.2)",
        token_2: "#FABB48",
        token_2_bg: "rgba(250, 187, 72, 0.2)",
        token_3: "#36BBB6",
        token_3_bg: "rgba(54, 187, 182, 0.2)",
        token_4: "#58BBF8",
        token_4_bg: "rgba(88, 187, 248, 0.2)",
        sub2_bg: "rgba(138, 132, 254, 0.2)",
        token_6: "#BE69F6",
        token_6_bg: "rgba(190, 105, 246, 0.2)",
        token_7: "#FF93FB",
        token_7_bg: "rgba(255, 147, 251, 0.2)",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },

      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        lx: "1280px",
        lx2: "1440px",
      },
    },
  },
  boxShadow: {
    default: "2px 2px 12px 0px rgba(0, 0, 0, 0.12)",
    border: "0px -3px 20px 0px rgba(0, 0, 0, 0.05)",
    modal: "0px -6px 30px 0px rgba(0, 0, 0, 0.08)",
  },
  plugins: [
    function (pluginAPI: PluginAPI) {
      pluginAPI.addUtilities({
        ".custom-scrollbar": {
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#BFC4CE",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#ABB0BA",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#fff",
            borderRadius: "4px",
          },
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
} satisfies Config;
