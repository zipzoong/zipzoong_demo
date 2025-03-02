import React from "react";

type CustomInputWithButtonProps = {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  buttonText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  disabled?: boolean;
};

const InputWithButton = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  buttonText,
  onChange,
  onButtonClick,
  disabled = false,
}: CustomInputWithButtonProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-body2_r text-text_sub4 mb-1">{label}</label>
      <div className="flex flex-row gap-2">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="border border-searchbarborder w-full p-2 focus:outline-none
            focus:ring-1 focus:ring-selectedoption_pressed transition-all rounded-lg"
        />
        <button
          onClick={onButtonClick}
          disabled={disabled}
          className={`px-4 rounded-lg text-white text-body3_m whitespace-nowrap ${
            disabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary-dark transition-all"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default InputWithButton;
