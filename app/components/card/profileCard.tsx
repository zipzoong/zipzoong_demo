import React, { useState } from "react";
import { Heart } from "lucide-react"; // 채워진 하트 아이콘 사용
import ColorBadge from "../badge/colorBadge";
import PrimaryBtn from "../button/primaryBtn";
import Image, { StaticImageData } from "next/image";

interface ProfileCardProps {
  profileImage: string | StaticImageData;
  name: string;
  title: string;
  portfolioCount: number;
  introText: string;
  specialty: string;
  description: string;
}

const ProfileCard = ({
  profileImage,
  name,
  title,
  portfolioCount,
  introText,
  specialty,
  description,
}: ProfileCardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(true);

  // 하트 클릭 핸들러
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
      {/* 프로필 이미지 및 하트 버튼 */}
      <div className="relative w-32 h-32">
        <Image
          src={profileImage}
          alt={name}
          width={128} // 원하는 고정된 크기
          height={128} // 원하는 고정된 크기
          className="rounded-full object-cover border-4 border-gray-200"
        />
        <div
          className="absolute top-0 left-0 p-1 cursor-pointer text-red-500"
          onClick={handleLikeClick}
        >
          {isLiked ? (
            <Heart size={24} /> // 채워진 하트 아이콘
          ) : (
            <Heart size={24} className="text-gray-400" /> // 비어 있는 하트 아이콘
          )}
        </div>
      </div>

      {/* 프로필 텍스트 및 배지 */}
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-semibold">{name}</div>
              <div className="text-sm text-gray-500">{title}</div>
              <div className="text-sm text-blue-500 mt-1">
                포트폴리오 {portfolioCount}개
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2">{specialty}</div>
          <div className="text-sm text-gray-600 mt-2">{description}</div>
        </div>

        {/* 배지와 버튼을 오른쪽에 배치 */}
        <div className="flex flex-col justify-between text-end">
          <p>후기 00건</p>
          <div>
            <div className="flex gap-2">
              <ColorBadge text="1인 가구 전문가" color="C_TOKEN_3" />
              <ColorBadge text="대표" color="C_TOKEN_2" />
            </div>
            <PrimaryBtn
              text="자세히 보기"
              onClick={() => alert("자세히 보기 클릭")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
