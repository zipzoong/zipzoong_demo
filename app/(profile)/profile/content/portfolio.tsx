"use client";

import { useSearchParams } from "next/navigation";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import PortfolioCard from "@/app/components/card/portfolioCard";

const Portfolio = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <div
        className="flex w-full flex-col gap-3 md:gap-4 md:flex-row md:flex-wrap
          md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        <PortfolioCard data={PORTFOLIO_DATA} />
      </div>
    </>
  );
};

export default Portfolio;
