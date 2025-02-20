import PortfolioCard from "@/app/components/card/portfolioCard";
import apt1 from "@/app/image/test/apt1.svg";
import apt2 from "@/app/image/test/apt2.svg";
import apt3 from "@/app/image/test/apt3.svg";
import apt4 from "@/app/image/test/apt4.svg";
import apt5 from "@/app/image/test/apt5.svg";
import apt6 from "@/app/image/test/apt6.svg";

const PortfolioSection = () => {
  const data = [
    {
      title: "Title 1",
      date: "2025-02-20",
      description: "Description for apt1",
      imageUrl: apt1,
      isScrap: false,
      id: 1,
    },
    {
      title: "Title 2",
      date: "2025-02-21",
      description: "Description for apt2",
      imageUrl: apt2,
      isScrap: false,
      id: 2,
    },
    {
      title: "Title 3",
      date: "2025-02-22",
      description: "Description for apt3",
      imageUrl: apt3,
      isScrap: false,
      id: 3,
    },
    {
      title: "Title 4",
      date: "2025-02-23",
      description: "Description for apt4",
      imageUrl: apt4,
      isScrap: false,
      id: 4,
    },
    {
      title: "Title 5",
      date: "2025-02-24",
      description: "Description for apt5",
      imageUrl: apt5,
      isScrap: false,
      id: 5,
    },
    {
      title: "Title 6",
      date: "2025-02-25",
      description: "Description for apt6",
      imageUrl: apt6,
      isScrap: false,
      id: 6,
    },
  ];

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
        <PortfolioCard data={data} />
      </div>
    </div>
  );
};

export default PortfolioSection;
