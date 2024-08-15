import React, { useState } from "react";
import image2 from "../assets/image2.jpg";
import CustomMouse from "./atoms/CustomMouse";

const ReviewCarousel = ({ reviews }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div
      id="review-section"
      style={{ backgroundImage: `url(${image2})` }}
      className="relative w-full bg-no-repeat bg-cover min-h-screen flex items-center justify-center"
    >
      <CustomMouse />
      <div
        id="review-left"
        className="absolute w-1/2 z-20 h-full  left-0 top-0 cursor-pointer"
        onClick={handlePreviousReview}
      ></div>
      <div
        id="review-right"
        className="absolute w-1/2 z-20  h-full right-0 top-0 cursor-pointer"
        onClick={handleNextReview}
      ></div>
      <div className="absolute backdrop-opacity-90  z-0 backdrop-invert-0 w-full h-full  bg-primary/70"></div>

      {reviews.map((review, index) => (
        <div
          key={index}
          className={`absolute backdrop-opacity-90  z-50 w-4/5   flex flex-col top-20  gap-[30px]   transition-all duration-500 ease-in-out transform ${
            index === currentReviewIndex
              ? "opacity-100 scale-100  z-10"
              : "opacity-0 scale-50 z-0"
          }`}
        >
          <p className={`text-[35px] text-center`}>
            <span className="text-gold text-[45px] leading-[40px] ">"</span>{" "}
            {review.description}
            <span className="text-gold text-[45px] ">"</span>
          </p>
          <p className="text-xl font-[300] text-center  ">{review.author} </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewCarousel;
