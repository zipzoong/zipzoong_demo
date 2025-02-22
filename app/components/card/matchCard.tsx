import React, { useState } from "react";
import ColorBadge from "../badge/colorBadge";
import { MdFavorite } from "react-icons/md";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FaRegStar, FaStar } from "react-icons/fa";

interface ProfileCardProps {
  professional: {
    id: string;
    profileImage: string | StaticImageData;
    name: string;
    company: string;
    title: string;
    portfolioCount: number;
    reviewCount: number;
    area: string;
    rating: number;
    description: string;
  };
}

const MatchCard = ({ professional }: ProfileCardProps) => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleGoToProfile = () => {
    router.push("/user");
  };

  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < professional.rating);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div
      className="w-full shadow-sm p-3 relative cursor-pointer py-4"
      onClick={handleGoToProfile}
    >
      <div className="flex flex-row gap-5">
        <div className="w-36 h-36">
          <div className="relative w-36 h-36 overflow-hidden">
            <Image
              src={professional.profileImage}
              alt="프로필"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-col">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col pt-1">
                <div className="flex flex-row items-center gap-2 text-primary font-medium text-[13px]">
                  <p>{professional.area}</p> |
                  <p>포토폴리오 {professional.portfolioCount}개</p>
                </div>
                <div className="flex flex-col mt-3">
                  <div className="flex items-center flex-row gap-2">
                    <h3 className="text-h2 text-text">{professional.name}</h3>
                    <p className="text-text_sub text-body3_r">
                      [{professional.company}]
                    </p>
                  </div>
                  <p className="text-h4 text-text_sub4">{professional.title}</p>
                  <p className="text-body3_r text-sub3">
                    {professional.description}
                  </p>
                </div>
              </div>
              {/* 우측 상단 하트 아이콘 */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col gap-1 items-center">
                  <MdFavorite
                    className={`text-h1_contents_title cursor-pointer ${
                      liked ? "text-point" : "text-sub3"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike();
                    }}
                  />

                  <p className="text-body4_r text-text_sub4">{likeCount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex gap-1 mt-2">
              <div className="flex gap-1">
                {stars.map((isFilled, index) =>
                  isFilled ? (
                    <FaStar key={index} className="text-star" />
                  ) : (
                    <FaRegStar key={index} className="text-star" />
                  )
                )}
              </div>
              {professional.reviewCount > 0 && (
                <p className="text-body4_r text-sub3">
                  + {professional.reviewCount}
                </p>
              )}
            </div>
            <div className="flex flex-row gap-2">
              <ColorBadge
                text="1인 가구 전문가"
                color="C_TOKEN_7"
                border={"rounded"}
              />
              <ColorBadge text="대표" color="C_TOKEN_4" border={"rounded"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
