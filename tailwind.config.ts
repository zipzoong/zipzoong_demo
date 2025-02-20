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
        // primary: "#3772F7",
        // primary_hover: "#2F65D6",
        // primary_pressed: "#2A5ABE",
        primary: "#4d82f8",
        primary_hover: "#3B78E0",
        primary_pressed: "#346DC9",
        disable: "#EDEDED",
        disable_hover: "#D6D6D6",
        disable_pressed: "#BEBEBE",
        hover: "#F4F6FA",
        pressed: "#E8EBF1",
        searchbar: "#F2F4F6",
        border: "#E3E3E3",
        searchbarborder: "#7495B6",
        text: "#303441",
        text_sub: "#898989",
        text_sub2: "#1F1F1F",
        text_sub3: "#7D8595",
        text_sub4: "#4B4F52",
        sub: "#D9D9D9",
        sub2: "#F6F6F6",
        sub3: "#B3B3B3",
        point: "#ff6e6e",
        // selectedoption_default: "rgba(88, 155, 255, 0.1)",
        // selectedoption_hover: "rgba(88, 155, 255, 0.2)",
        // selectedoption_pressed: "rgba(88, 155, 255, 0.26)",
        // selectedoption_border: "rgba(88, 155, 255, 0.70)",
        selectedoption_default: "rgba(77, 130, 248, 0.1)",
        selectedoption_hover: "rgba(59, 120, 224, 0.2)",
        selectedoption_pressed: "rgba(52, 109, 201, 0.26)",
        selectedoption_border: "rgba(52, 109, 201, 0.7)",

        token_bg: "rgba(166, 166, 166, 0.7)",
        token_1: "#FA6B48",
        token_1_bg: "rgba(250, 107, 72, 0.1)",
        token_2: "#FDB528",
        token_2_bg: "rgba(253, 181, 40, 0.1)",
        token_3: "#36BBB6",
        token_3_bg: "rgba(54, 187, 182, 0.1)",
        token_4: "#58BBF8",
        token_4_bg: "rgba(88, 187, 248, 0.1)",
        sub2_bg: "rgba(138, 132, 254, 0.1)",
        token_6: "#BE69F6",
        token_6_bg: "rgba(190, 105, 246, 0.1)",
        token_7: "#FF93FB",
        token_7_bg: "rgba(255, 147, 251, 0.1)",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        8: "8px",
        28: "28px",
        19: "19px",
        15: "15px",
        13: "13px",
        10: "10px",
        22: "22px",
        32: "32px",

        h1_large: ["32px", { fontWeight: 700, lineHeight: "48px" }],
        h2_large: ["28px", { fontWeight: 600, lineHeight: "42px" }],
        h3_large: ["22px", { fontWeight: 600, lineHeight: "33px" }],

        h1_contents_title: ["24px", { fontWeight: 600 }],
        h2: ["21px", { fontWeight: 600 }],
        h3: ["18px", { fontWeight: 600, lineHeight: "27px" }],
        h4: ["16px", { fontWeight: 500, lineHeight: "24px" }],
        h4_r: ["16px", { fontWeight: 400, lineHeight: "24px" }],
        h4_sb: ["16px", { fontWeight: 600, lineHeight: "24px" }],

        body1_r: ["15px", { fontWeight: 400, lineHeight: "150%" }],
        body1_m: ["15px", { fontWeight: 500, lineHeight: "22.5px" }],
        body1_sb: ["14px", { fontWeight: 600, lineHeight: "21px" }],
        body2_r: ["14px", { fontWeight: 400, lineHeight: "21px" }],
        body2_m: ["14px", { fontWeight: 500, lineHeight: "21px" }],
        body3_r: ["13px", { fontWeight: 400, lineHeight: "18px" }],
        body3_m: ["13px", { fontWeight: 500, lineHeight: "19.5px" }],
        body4_r: ["11px", { fontWeight: 400 }],

        mobile_h1_large: ["28px", { fontWeight: 700, lineHeight: "42px" }],
        mobile_h2_large: ["22px", { fontWeight: 600, lineHeight: "33px" }],

        mobile_h1_contents_title: ["18px", { fontWeight: 600 }],
        mobile_h1_sb: ["14px", { fontWeight: 600, lineHeight: "21px" }],
        mobile_h2: ["17px", { fontWeight: 600 }],
        mobile_h3: ["16px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_h4: ["15px", { fontWeight: 500, lineHeight: "150%" }],
        mobile_h4_r: ["15px", { fontWeight: 400, lineHeight: "150%" }],
        mobile_h4_sb: ["15px", { fontWeight: 600, lineHeight: "150%" }],

        mobile_body1_r: ["14px", { fontWeight: 400, lineHeight: "150%" }],
        mobile_body1_m: ["14px", { fontWeight: 500, lineHeight: "150%" }],
        mobile_body1_sb: ["14px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_body2_r: ["13px", { fontWeight: 400, lineHeight: "150%" }],
        mobile_body2_m: ["13px", { fontWeight: 500, lineHeight: "150%" }],
        mobile_body2_sb: ["13px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_body3_r: ["12px", { fontWeight: 400, lineHeight: "150%" }],
        mobile_body3_m: ["12px", { fontWeight: 500, lineHeight: "150%" }],
        mobile_body3_sb: ["12px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_body4_r: ["11px", { fontWeight: 500, lineHeight: "150%" }],
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
