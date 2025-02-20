"use client";

import React, { useState } from "react";
import MatchLeftMenu from "@/app/components/menu/matchLeftMenu";
import banner from "@/app/image/match/banner.svg";

import Image from "next/image";
import { PROFESSIONALS } from "@/app/data/match";
import Pagination from "@/app/components/pagination/pagination";
import MatchProfileCard from "@/app/components/card/matchProfileCard";

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
  const [activeCategory, setActiveCategory] =
    useState<string>("1인 가구 전문가");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="py-12">
      <Image
        src={banner}
        alt="banner"
        height={100}
        className="w-full max-w-[1040px] mx-auto"
      />
      <div className="max-w-[1040px] mx-auto flex mt-8">
        {/* Left Side Menu */}
        <div className="flex flex-col">
          <MatchLeftMenu
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />
        </div>

        {/* Main Content */}
        <div className="w-full ml-6 mt-5">
          <div className="space-y-6">
            {PROFESSIONALS.map((professional) => (
              <MatchProfileCard
                key={professional.id}
                professional={professional}
              />
            ))}
          </div>

          {/* Pagination or Navigation */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
