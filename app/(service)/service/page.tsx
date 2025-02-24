"use client";

import React, { useState } from "react";
import Pagination from "@/app/components/pagination/pagination";
import MatchList from "@/app/components/list/mtachList";
import useResponsive from "@/app/hook/useResponsive";
import { SERVICE_CATEGORY } from "@/app/data/service";
import ServiceLeftMenu from "@/app/components/menu/serviceLeftMenu";
import MobileServiceTopMenu from "@/app/components/menu/mobileServiceTopMenu";

const ServicePage = () => {
  const isMdUp = useResponsive("md");

  const [activeCategory, setActiveCategory] = useState<string>(
    SERVICE_CATEGORY[0].subCategories[0]
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="md:py-12 py-6">
      <div className={`flex ${isMdUp ? "flex-row" : "flex-col"}`}>
        {/* Left Side Menu */}
        <div className="flex flex-col">
          {isMdUp ? (
            <ServiceLeftMenu
              categories={SERVICE_CATEGORY}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />
          ) : (
            <MobileServiceTopMenu
              categories={SERVICE_CATEGORY}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />
          )}
        </div>

        <div className="w-full md:ml-0 lg:ml-6 md:mt-5">
          <MatchList />

          {/* Pagination */}
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

export default ServicePage;
