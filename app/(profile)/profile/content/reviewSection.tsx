import CustomerReview from "@/app/components/review/customerReview";
import { REVIEW } from "@/app/data/review";

const ReviewSection = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-1 mb-3">
        <h2 className="text-h2 font-semibold mb-2 text-text_sub2">고객 리뷰</h2>
        <p className="text-body3_m text-text_sub cursor-pointer">전체보기</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {REVIEW.slice(0, 4).map((review, index) => (
          <CustomerReview
            key={index}
            name={review.name}
            imageUrl={review.imageUrl}
            title={review.title}
            description={review.description}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
