import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousel_01 from "@/app/image/carousel_01.svg";
import carousel_02 from "@/app/image/carousel_01.svg";
import carousel_03 from "@/app/image/carousel_01.svg";

const images = [carousel_01, carousel_02, carousel_03];

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full">
      {/* 배경 이미지 */}
      <Image
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-full object-cover"
      />

      {/* 컨텐츠 영역 (1040px 제한) */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="max-w-[1040px] w-full mx-auto text-white text-left">
          <p className="text-sm font-bold uppercase mb-5">NEW</p>
          <h1 className="text-2xl md:text-4xl font-thin leading-snug mt-2 mb-5">
            똑똑한 내 집 마련, <br />
            집플에서 시작!
          </h1>
          <p className="mt-2 text-lx font-normal">집플 베타서비스 오픈</p>

          {/* 네비게이션 & 페이지 인디케이터 */}
          <div className="mt-12 flex items-center space-x-3">
            <span className="py-1.5 text-center w-[70px] bg-white/60 text-black rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={prevSlide}
              className="p-1.5 bg-white/60 rounded-full hover:bg-white/50 transition"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1.5 bg-white/60 rounded-full hover:bg-white/50 transition"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
