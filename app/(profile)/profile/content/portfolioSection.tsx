import PortfolioCard from "@/app/components/card/portfolioCard";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

const PortfolioSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-1 mb-3">
        <h2 className="text-h2 font-semibold mb-2 text-text_sub2">
          포토폴리오
        </h2>
        <p className="text-body3_m text-text_sub cursor-pointer">전체보기</p>
      </div>
      <div
        className="md:max-h-[700px] flex w-full flex-col gap-3 md:gap-4 md:flex-row md:flex-wrap
          md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        <PortfolioCard data={PORTFOLIO_DATA.slice(0, 6)} />
      </div>
    </div>
  );
};

export default PortfolioSection;
