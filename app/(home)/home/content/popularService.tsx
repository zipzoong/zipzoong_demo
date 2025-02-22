"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Shortcut from "@/app/components/card/shortcutCard";
import ServiceCard from "@/app/components/card/serviceCard";

// 이미지 (Next.js에서 `default` 사용)
import movingImage from "@/app/image/service/service_card01.svg";
import lawyerImage from "@/app/image/service/service_card02.svg";
import interiorImage from "@/app/image/service/service_card03.svg";

const services = [
  { image: movingImage, title: "이사/입주청소", tags: ["전문분야", "이사"] },
  { image: lawyerImage, title: "법무사 매칭", tags: ["전문분야", "법무사"] },
  {
    image: interiorImage,
    title: "인테리어시공",
    tags: ["전문분야", "인테리어"],
  },
  { image: movingImage, title: "추가 서비스 1", tags: ["전문분야", "이사"] },
  { image: lawyerImage, title: "추가 서비스 2", tags: ["전문분야", "법무사"] },
];

const PopularService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const cardWidth = 333; // 카드 너비 (px)
  const maxIndex = Math.ceil(services.length / itemsPerPage) - 1;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="pb-20 max-w-[1040px] mx-auto">
      {/* Shortcut Cards */}
      <div className="flex flex-row gap-6">
        <Shortcut
          color="blue"
          title="클린한 부동산 생활 솔루션, 집플"
          description="이용 가이드 바로가기"
          onClick={() => {}}
        />
        <Shortcut
          color="black"
          title="집플에서 새로운 고객을 만나보세요"
          description="전문가 등록 바로가기"
          onClick={() => {}}
        />
      </div>

      {/* 타이틀 & 버튼 */}
      <div className="flex justify-between items-center mt-16">
        <h1 className="font-thin text-[24px]">
          집플 인기 서비스
          <br />
          TOP5
        </h1>
        <div className="flex gap-2 self-end">
          <button
            onClick={prevSlide}
            className="p-2"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2"
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* 슬라이드 컨테이너 */}
      <div
        className="relative mt-6 overflow-hidden"
        style={{ width: `${itemsPerPage * (cardWidth + 20)}px` }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (cardWidth + 20) * itemsPerPage
            }px)`,
            width: `${services.length * (cardWidth + 20)}px`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 mr-5"
              style={{ width: `${cardWidth}px` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularService;
