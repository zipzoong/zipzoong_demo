"use client";

import { useState } from "react";
import Portfolio from "@/app/(profile)/profile/content/portfolio";
import Pagination from "@/app/components/pagination/pagination";
import { useRouter } from "next/navigation";

const PortfolioPage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col max-w-[1040px] mx-auto gap-8 mt-12 mb-20">
      <div className="flex justify-between items-center px-1 border-b pb-2">
        <h2 className="text-h1_contents_title font-semibold mb-2 text-text_sub2">
          Jeremy Rose님의 포토폴리오
        </h2>
        <p
          className="text-body3_m text-text_sub cursor-pointer"
          onClick={handleGoBack}
        >
          돌아가기
        </p>
      </div>
      <Portfolio />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PortfolioPage;
