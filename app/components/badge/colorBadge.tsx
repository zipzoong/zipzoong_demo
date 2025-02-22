import { tokenColorMapping } from "@/app/utils/badgeColor";
import React from "react";

interface ColorBadgeProps {
  text: string;
  color: keyof typeof tokenColorMapping;
  border?: "basic" | "rounded";
}

const ColorBadge = ({ text, color, border = "basic" }: ColorBadgeProps) => {
  const colorStyles = tokenColorMapping[color];

  return (
    <div className="flex items-center text-center">
      <div
        className={`${
          border === "basic" ? "rounded-sm" : "rounded-2xl"
        } text-[13px] font-medium py-1 px-3
            ${colorStyles.bg} ${colorStyles.text} whitespace-nowrap`}
      >
        {text}
      </div>
    </div>
  );
};

export default ColorBadge;
