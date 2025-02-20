import CustomerReview from "@/app/components/review/customerReview";
import test01 from "@/app/image/test/test1.png";
import test02 from "@/app/image/test/test2.png";
import test03 from "@/app/image/test/test3.png";

const ReviewSection = () => {
  const reviews = [
    {
      name: "백설공주",
      imageUrl: test01,
      title: "정말 친절했어요!",
      description:
        "고객님께서 항상 친절하시고, 요청 사항을 빠르게 처리해주셔서 매우 만족했습니다. 다시 만나고 싶어요.",
    },
    {
      name: "홍길동",
      imageUrl: test02,
      title: "믿음이 가는 서비스",
      description:
        "처음부터 끝까지 신뢰감이 가는 서비스를 제공해주셔서 편안하게 상담을 받을 수 있었습니다.",
    },
    {
      name: "김철수",
      imageUrl: test03,
      title: "다시 만나고 싶어요",
      description:
        "친절하고 세심하게 잘 도와주셔서 다음에도 또 만나고 싶습니다. 매우 만족스러웠습니다.",
    },
  ];

  return (
    <div className="flex flex-col mt-12">
      <div className="flex justify-between items-center px-1 mb-3">
        <h2 className="text-h2 font-semibold mb-2 text-text_sub2">고객 리뷰</h2>
        <p className="text-body3_m text-text_sub cursor-pointer">전체보기</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {reviews.map((review, index) => (
          <CustomerReview
            key={index}
            name={review.name}
            imageUrl={review.imageUrl}
            title={review.title}
            description={review.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
