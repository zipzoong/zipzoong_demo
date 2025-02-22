import React from "react";
import Image from "next/image";

interface CategoryItemProps {
  icon: string;
  label: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-3.5 py-[15px] px-[19px]">
      <div className="p-[35px] flex items-center justify-center bg-sub2 rounded-[40px]">
        <Image src={icon} alt={label} width={48} height={48} />
      </div>
      <p className="text-[15px] font-medium text-text">{label}</p>
    </div>
  );
};

export default CategoryItem;
