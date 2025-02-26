import { useState } from "react";
import Image from "next/image";
import test10 from "@/app/image/test/test10.png";

const User = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "김이름",
    phone: "+82 10-****-****",
    email: "ab*****@gmail.com",
    address: "서울 동대문구 천호대로 405",
    portfolio: "",
    residence: "아파트",
    activities: ["찜 목록 관리", "집플래너", "후기 관리"],
    community: ["작성글 확인", "작성 댓글 확인"],
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row p-6 rounded-lg shadow-md w-full">
      {/* Left Content */}
      <div className="flex flex-col items-center w-1/4 p-4 bg-white rounded-lg shadow">
        <Image
          src={test10}
          alt="User profile"
          width={120}
          height={120}
          className="rounded-full"
        />
        <h2 className="mt-4 text-lg font-semibold">{userInfo.name}</h2>
        <p className="text-gray-600">일반 회원</p>
      </div>

      {/* Right Content */}
      <div className="flex flex-col w-3/4 p-6 bg-white rounded-lg shadow ml-4">
        <h3 className="text-lg font-semibold text-blue-600">나의 정보</h3>
        <div className="mt-2 border-t pt-2">
          {isEditing ? (
            <>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                className="border p-1 w-full"
              />
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="border p-1 w-full mt-2"
              />
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                className="border p-1 w-full mt-2"
              />
              <input
                type="text"
                name="portfolio"
                placeholder="포트폴리오 링크 입력"
                value={userInfo.portfolio}
                onChange={handleChange}
                className="border p-1 w-full mt-2"
              />
              <input
                type="text"
                name="residence"
                value={userInfo.residence}
                onChange={handleChange}
                className="border p-1 w-full mt-2"
              />
            </>
          ) : (
            <>
              <p>
                <strong>📞 전화번호:</strong> {userInfo.phone}
              </p>
              <p>
                <strong>📧 이메일:</strong> {userInfo.email}
              </p>
              <p>
                <strong>📍 주소:</strong> {userInfo.address}
              </p>
              <p>
                <strong>🏠 거주 형태:</strong> {userInfo.residence}
              </p>
              {userInfo.portfolio && (
                <p>
                  <strong>📂 포트폴리오:</strong>{" "}
                  <a
                    href={userInfo.portfolio}
                    target="_blank"
                    className="text-blue-500"
                  >
                    {userInfo.portfolio}
                  </a>
                </p>
              )}
            </>
          )}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-blue-600">활동 정보</h3>
        <ul className="mt-2 border-t pt-2">
          {userInfo.activities.map((activity, index) => (
            <li key={index} className="py-1">
              {activity}
            </li>
          ))}
        </ul>

        <h3 className="mt-4 text-lg font-semibold text-blue-600">커뮤니티</h3>
        <ul className="mt-2 border-t pt-2">
          {userInfo.community.map((item, index) => (
            <li key={index} className="py-1">
              {item}
            </li>
          ))}
        </ul>

        <button
          onClick={handleEditToggle}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isEditing ? "저장" : "수정"}
        </button>
      </div>
    </div>
  );
};

export default User;
