import Image, { StaticImageData } from "next/image";
import React from "react";

interface ReviewProps {
  name: string;
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
}

const CustomerReview = ({
  name,
  imageUrl,
  title,
  description,
}: ReviewProps) => {
  return (
    <div
      className="flex flex-row w-full gap-2 bg-white border rounded-lg p-6 max-w-lg mx-auto
    shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-300 mb-1 border-border"
    >
      {/* Left Section with Profile Image */}
      <div className="flex items-center gap-4 mb-6 min-w-[64px] min-h-[64px]">
        <Image
          src={imageUrl}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Right Section with Name, Title, and Description */}
      <div className="flex flex-col w-full ml-4">
        <div className="flex flex-row items-center gap-3">
          <p className="text-xl font-semibold text-text">{name}</p>
          <p className="text-sm text-text_sub3">고객님의 리뷰</p>
        </div>

        {/* Title and Description */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-text line-clamp-2">
            {title}
          </h3>
          <p className="text-text_sub4 mt-2 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
