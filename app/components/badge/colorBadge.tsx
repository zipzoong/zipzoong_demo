import { tokenColorMapping } from "@/app/utils/badgeColor"; // tokenColorMapping을 임포트
import React from "react";

interface ColorBadgeProps {
  text: string;
  color: keyof typeof tokenColorMapping; // 색상 키를 받아옵니다.
}

const ColorBadge = ({ text, color }: ColorBadgeProps) => {
  const colorStyles = tokenColorMapping[color];

  return (
    <div className="flex items-center text-center">
      <div
        className={`rounded-sm text-[13px] font-medium py-[3px] px-2 
            ${colorStyles.bg} ${colorStyles.text} whitespace-nowrap`}
      >
        {text}
      </div>
    </div>
  );
};

export default ColorBadge;
