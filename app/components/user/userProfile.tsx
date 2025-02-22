import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  FaStar,
  FaRegStar,
  FaPhoneAlt,
  FaEnvelope,
  FaLink,
} from "react-icons/fa";
import ReviewSection from "@/app/(profile)/profile/content/reviewSection";
import PortfolioSection from "@/app/(profile)/profile/content/portfolioSection";
import { MdLink, MdLocationOn } from "react-icons/md";
import { useRouter } from "next/navigation";

const scores = [
  { label: "친절해요", value: 95, rank: 5, emoji: "😊" },
  { label: "믿음이 가요", value: 80, rank: 12, emoji: "💖" },
  { label: "또 만나고 싶어요", value: 85, rank: 10, emoji: "🤝" },
];

interface UserProfileProps {
  name: string;
  location: string;
  imageUrl: string | StaticImageData;
  primaryWork: string;
  secondaryWork: string;
  phoneNumber: string;
  address: string;
  email: string;
  website: string;
  birthday: string;
  gender: string;
  rating: number;
  role: string;
  field: string;
  description: string;
  contactUrl: string;
  registrationInfo: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  location,
  imageUrl,
  primaryWork,
  secondaryWork,
  phoneNumber,
  address,
  email,
  website,
  birthday,
  gender,
  rating,
  role,
  field,
  description,
  contactUrl,
  registrationInfo,
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("portfolio");

  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < rating);

  const handleAllClick = () => {
    router.push(`/${activeTab}`);
  };

  return (
    <div className="w-full max-w-[1040px] m-auto flex justify-center items-center mb-40">
      <div className="w-full mt-12 flex flex-col justify-between h-full">
        {/* Profile Header */}
        <div className="flex items-center mb-8">
          <div className="w-80 h-80 rounded-lg overflow-hidden mr-6">
            <Image
              src={imageUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col h-80 py-1 justify-between">
            <div>
              <h1 className="text-h1_m text-text">{name}</h1>
              <p className="text-body2_r text-gray-500">{description}</p>
            </div>
            <div className="flex flex-row items-center text-center mt-3 mb-5">
              <div
                className={`flex flex-row rounded-sm text-[13px] font-medium py-1 px-3
        text-token_4 bg-token_4_bg whitespace-nowrap`}
              >
                <MdLink className="w-5 h-5 text-token_4" />
                &nbsp;&nbsp;&nbsp;
                <span>{contactUrl}</span>
              </div>
            </div>
            {/* Rating Section */}
            <div>
              <h3 className="text-text_sub2 text-h3_r mt-3">Ratings</h3>
              <div className="flex space-x-1">
                {stars.map((isFilled, index) =>
                  isFilled ? (
                    <FaStar key={index} className="text-star text-h3" />
                  ) : (
                    <FaRegStar key={index} className="text-star text-h3" />
                  )
                )}
              </div>
            </div>
            <div className="space-y-2 mt-6 mb-4 text-body2_m text-text_sub4">
              <div className="flex items-center">
                <p className="w-20">등록번호:</p>
                <p>{registrationInfo}</p>
              </div>
              <div className="flex items-center">
                <p className="w-20">전화번호:</p>
                <p>{phoneNumber}</p>
              </div>
              <div className="flex items-center gap-3">
                {/* <p className="w-20">주소:</p> */}
                <MdLocationOn className="text-gray-400" />
                <p>{address}</p>
              </div>
            </div>
          </div>
        </div>
        {/* User Info */}
        <div className="flex gap-8 mt-5">
          <div className="flex flex-col w-[320px]">
            {/* Contact Section */}
            <div className="mb-6">
              <h3 className="text-text_sub2 text-h2">Contact</h3>
              <div className="flex items-center space-x-4 mt-2">
                <FaPhoneAlt className="text-primary" />
                <p className="text-sm text-gray-700">{phoneNumber}</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <FaEnvelope className="text-primary" />
                <p className="text-sm text-gray-700">{email}</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <FaLink className="text-primary" />
                <p className="text-sm text-gray-700">
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {website}
                  </a>
                </p>
              </div>
            </div>
            {/* Work Section */}
            <div className="border-t border-gray-200 pt-6 mb-6 w-[320px]">
              <h3 className="text-text_sub2 text-h2">Work</h3>
              <p className="text-sm text-gray-700">
                <strong>{primaryWork}</strong>
              </p>
              <p className="text-sm text-gray-600">{secondaryWork}</p>
            </div>
            {/* <div className="mt-16 space-y-3">
              {scores.map((score, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-0.5"
                >
                  <div className="flex  justify-between">
                    <span className="text-body3_m text-text_sub">
                      {score.label} {score.emoji}
                    </span>
                    <span className="text-body4_r text-primary">
                      (상위 {score.rank}%)
                    </span>
                  </div>

                  <div className="w-full bg-disable rounded-full h-2">
                    <div
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${score.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Tabs Section */}
          <div className="">
            <div className="flex items-start justify-between w-full">
              <div className="flex space-x-6">
                <button
                  className={`${
                    activeTab === "portfolio"
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600"
                  } text-lg font-medium`}
                  onClick={() => setActiveTab("portfolio")}
                >
                  포트폴리오
                </button>
                <button
                  className={`${
                    activeTab === "reviews"
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600"
                  } text-lg font-medium`}
                  onClick={() => setActiveTab("reviews")}
                >
                  고객 리뷰
                </button>
              </div>
              <p
                className="text-body3_m text-text_sub cursor-pointer"
                onClick={handleAllClick}
              >
                전체보기
              </p>
            </div>

            <div className="gap-6">
              {activeTab === "portfolio" && (
                <div className="pt-4">
                  <PortfolioSection />
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="pt-4">
                  <ReviewSection />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
