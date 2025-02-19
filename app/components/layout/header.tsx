import React from "react";
import Image from "next/image";
import { Search, Bell, User } from "lucide-react";
import logo from "@/app/image/icon/logo_main.svg";
import logo_icon from "@/app/image/icon/logo_icon.svg";

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <div className="w-full bg-white shadow-md h-[72px] flex justify-center">
      <header className="w-full max-w-[1440px] flex justify-between items-center">
        {/* 로고 */}
        <div className="w-1/6 flex justify-start">
          <Image src={logo} alt="logo" width={75} height={16} />
        </div>

        <div className="w-full max-w-[1040px] flex justify-between items-center">
          {/* 네비게이션 메뉴 */}
          <nav className="flex flex-row gap-5 text-[16px] text-text font-medium">
            <p>중개사매칭</p>
            <p>생활서비스</p>
            <p className="flex flex-row gap-[3px] items-center">
              <Image src={logo_icon} alt="logo" width={18} height={20} />
              집플래너
            </p>
            <p>커뮤니티</p>
          </nav>

          <div className="flex flex-row items-center gap-5">
            {/* 검색 바 */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="border border-gray-300 rounded-full px-4 py-2 w-60 focus:outline-none focus:border-blue-500 text-sm"
              />
              <Search className="absolute right-3 text-gray-500 w-5 h-5" />
            </div>

            {/* 알림 아이콘 */}
            <Bell className="w-6 h-6 text-text cursor-pointer" />
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <div className="w-1/6 flex justify-end gap-5">
          {/* 로그인 */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <button className="text-text">로그아웃</button>
              <User className="w-8 h-8 text-text cursor-pointer" />
            </div>
          ) : (
            <button className="text-text">로그인</button>
          )}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            회원가입
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
