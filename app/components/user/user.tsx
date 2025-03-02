import { useState, useEffect } from "react";
import Image from "next/image";
import test10 from "@/app/image/test/test10.png";
import { useRouter } from "next/navigation";

const User = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isDaumLoaded, setIsDaumLoaded] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "김이름",
    phone: "010-1234-5678",
    email: "abc@gmail.com",
    address: "서울 동대문구 천호대로 405",
    portfolio: "",
    residence: "아파트",
    activities: [
      { name: "찜 목록 관리", url: "/wishlist" },
      { name: "집플래너", url: "/house-planner" },
      { name: "후기 관리", url: "/reviews" },
    ],
    community: [
      { name: "작성글 확인", url: "/community/posts" },
      { name: "작성 댓글 확인", url: "/community/comments" },
    ],
  });

  // ✅ 카카오 API 로드 감지
  useEffect(() => {
    const checkDaumAPI = setInterval(() => {
      if (typeof window !== "undefined" && window.daum) {
        setIsDaumLoaded(true);
        clearInterval(checkDaumAPI);
      }
    }, 500); // 0.5초마다 API 확인

    return () => clearInterval(checkDaumAPI);
  }, []);

  // ✅ 주소 검색 (카카오 API 사용)
  const handleAddressSearch = () => {
    if (!isDaumLoaded) {
      alert(
        "주소 검색 API가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요."
      );
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data: any) => {
        setUserInfo((prev) => ({ ...prev, address: data.address }));
      },
    }).open();
  };

  return (
    <div className="flex flex-row p-6 rounded-lg w-full">
      {/* Left Content */}
      <div className="flex flex-col items-center w-1/4 p-4 bg-white">
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
      <div className="flex flex-col w-3/4 p-6 bg-white rounded-lg ml-4">
        <h3 className="text-lg font-semibold text-primary">나의 정보</h3>
        <div className="mt-2 border-t pt-2">
          {isEditing ? (
            <>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }
                className="border p-1 w-full"
              />
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                className="border p-1 w-full mt-2"
              />
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, address: e.target.value })
                  }
                  className="border p-1 w-full"
                />
                <button
                  onClick={handleAddressSearch}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                  disabled={!isDaumLoaded}
                >
                  주소 검색
                </button>
              </div>
              <input
                type="text"
                name="portfolio"
                placeholder="포트폴리오 링크 입력"
                value={userInfo.portfolio}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, portfolio: e.target.value })
                }
                className="border p-1 w-full mt-2"
              />
              <input
                type="text"
                name="residence"
                value={userInfo.residence}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, residence: e.target.value })
                }
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
                  <strong>📂 포트폴리오:</strong>
                  <a
                    href={userInfo.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    {userInfo.portfolio}
                  </a>
                </p>
              )}
            </>
          )}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-primary">활동 정보</h3>
        <ul className="mt-2 border-t pt-2">
          {userInfo.activities.map((activity, index) => (
            <li
              key={index}
              className="py-1 cursor-pointer text-blue-500 hover:underline"
              onClick={() => router.push(activity.url)}
            >
              {activity.name}
            </li>
          ))}
        </ul>

        <h3 className="mt-4 text-lg font-semibold text-blue-600">커뮤니티</h3>
        <ul className="mt-2 border-t pt-2">
          {userInfo.community.map((item, index) => (
            <li
              key={index}
              className="py-1 cursor-pointer text-blue-500 hover:underline"
              onClick={() => router.push(item.url)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
        >
          {isEditing ? "저장" : "수정"}
        </button>
      </div>
    </div>
  );
};

export default User;
