"use client";

import User from "@/app/components/user/user";

const MyPage = () => {
  return (
    <div className="w-full bg-bg_sub">
      <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-lx px-4 md:px-5">
        <User />
      </div>
    </div>
  );
};

export default MyPage;
