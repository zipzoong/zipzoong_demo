import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const PrimaryBtn = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`mt-2 px-4 py-2 text-white bg-primary rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
