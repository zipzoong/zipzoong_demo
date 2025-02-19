"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MatchLeftMenu from "@/app/components/menu/matchLeftMenu";

const professionals = [
  {
    id: 1,
    name: "{중개사명} 중개사",
    title: "자기소개 작성(20자제한)",
    description: "인문학 청소 중 가장 정책에 적합한...",
    img: "path/to/image",
  },
  {
    id: 2,
    name: "홍길동 중개사",
    title: "자기소개 작성(20자제한)",
    description: "인문학 청소 중 가장 정책에 적합한...",
    img: "path/to/image",
  },
];

const categories = [
  "아파트",
  "주택/다가구",
  "빌라/다세대",
  "원룸/투룸",
  "상가 점포",
  "빌딩/상업시설",
  "사무실",
  "공장/창고/지식산업센터",
  "병원/요양원",
  "기타(경매/분양 등)",
  "호텔/모텔/펜션",
  "오피스텔",
  "재건축/재개발",
  "토지",
  "종교시설",
];

const MatchPage = () => {
  const [activeCategory, setActiveCategory] = useState("1인 가구 전문가");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const nextSlide = () => {
    if (currentIndex < professionals.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-bg_sub3 py-12">
      <div className="max-w-[1040px] mx-auto flex">
        {/* Left Side Menu */}
        <MatchLeftMenu
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        {/* Main Content */}
        <div className="w-full ml-6">
          {/* Title and Filter */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-thin text-[32px]">
              클린한 부동산 생활 솔루션 집중
            </h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                1인 가구 전문가
              </button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-lg">
                2인 가구 전문가
              </button>
            </div>
          </div>

          {/* List of Professionals */}
          <div className="space-y-6">
            {professionals.map((professional) => (
              <div
                key={professional.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                {/* Professional Image */}
                <img
                  src={professional.img}
                  alt={professional.name}
                  className="w-16 h-16 rounded-full"
                />

                {/* Professional Info */}
                <div className="flex-grow pl-4">
                  <h3 className="font-semibold text-lg">{professional.name}</h3>
                  <p className="text-sm text-gray-600">{professional.title}</p>
                  <p className="text-xs text-gray-400">
                    {professional.description}
                  </p>
                </div>

                {/* View Detail Button */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  자세히 보기
                </button>
              </div>
            ))}
          </div>

          {/* Pagination or Navigation */}
          <div className="mt-8 flex justify-center">
            <button className="p-2 bg-white rounded-full shadow-md">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <span className="mx-4 text-gray-700">Page 1 of 3</span>
            <button className="p-2 bg-white rounded-full shadow-md">
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
