import React from "react";

interface LeftMenuProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const MatchLeftMenu: React.FC<LeftMenuProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  return (
    <div className="w-[250px] bg-white shadow-md rounded-lg p-6">
      <h2 className="font-semibold text-lg mb-4">전문가 선택</h2>
      <ul className="space-y-1.5">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryClick(category)}
              className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-colors duration-300 ${
                activeCategory === category
                  ? "text-primary"
                  : "text-text_sub hover:text-primary"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchLeftMenu;
