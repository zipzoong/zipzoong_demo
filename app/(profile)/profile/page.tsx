"use client";

import { Suspense } from "react";
import Profile from "./content/profile";
import PortfolioSection from "./content/portfolioSection";
import ProfileInfo from "./content/profileInfo";
import ReviewSection from "./content/reviewSection";

const ProfilePage = () => {
  return (
    <Suspense>
      <div className="flex flex-row max-w-[1040px] mx-auto gap-8 mt-10 mb-20">
        <Profile />
        <div className="flex flex-col">
          <ProfileInfo
            name="아파트 매매 전문가 한줄소개"
            role="전문가"
            field="아파트"
            description="00시 00구에서 6년간 일해왔으며 고객님들의 니즈에 맞는 상담을 제공합니다."
            contactUrl="https://blog.naver.com/junghoon7771/2230401001351"
            registrationInfo="0000"
            phoneNumber="00-0000-0000"
            address="서울특별시 서초구 서초대로 00길 00, 0000호"
          />
          <PortfolioSection />
          <ReviewSection />
        </div>
      </div>
    </Suspense>
  );
};

export default ProfilePage;
