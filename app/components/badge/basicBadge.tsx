import React from "react";

interface BadgeProps {
  status: "enable" | "disable" | "outlined";
  text: string;
}

const BasicBadge = ({ status, text }: BadgeProps) => {
  const getBadgeStyle = () => {
    switch (status) {
      case "enable":
        return "text-primary bg-selectedoption_hover";
      case "disable":
        return "text-subtext2 bg-token_bg";
      case "outlined":
        return "text-primary border border-selectedoption_border bg-white";
      default:
        return "";
    }
  };

  return (
    <div className="flex items-center text-center">
      <div
        className={`rounded text-[13px] font-medium py-[3px] 
            w-[62px] md:py-1 md:w-[64px] ${getBadgeStyle()}`}
      >
        {text}
      </div>
    </div>
  );
};

export default BasicBadge;
