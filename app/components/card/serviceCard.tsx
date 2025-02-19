import React from "react";
import Image from "next/image";
import BasicBadge from "../badge/basicBadge";

interface ServiceCardProps {
  image: string;
  title: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, tags }) => {
  return (
    <div className="bg-white w-[333px] flex flex-col">
      {/* 배경 이미지 */}
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={333} // 부모 컨테이너 크기와 동일하게 설정
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-row justify-between items-center pt-4">
        {/* 태그 */}
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <BasicBadge
              key={index}
              status={index === 0 ? "enable" : "outlined"}
              text={tag}
            />
          ))}
        </div>

        {/* 서비스 제목 */}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
