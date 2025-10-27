import React, { useEffect, useState } from "react";
import reviewsData from "../data/reviews.json";

export default function Review() {
  const [current, setCurrent] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  const nextSlide = () => {
    if (current < reviews.length - 3) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative w-full h-115 max-sm:h-109 bg-[#fcefdc] flex sm:items-center sm:justify-center overflow-hidden overflow-x-hidden">
          <div className="flex mt-[-390px] relative z-15 ml-20 items-center gap-2  sm:hidden">
            <p className=" max-sm:text-2xl   font-bold text-[#080602] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
              What Our Clients Say
            </p>
            <img src="./twosushi.png" alt="" className="w-16 max-sm:w-10" />
          </div>
      <div className="flex items-center gap-20 justify-center absolute z-10">




        <div className="sm:py-16 sm:px-6 text-center relative">



          <div className="flex items-center gap-2 justify-center max-sm:hidden">
            <p className="text-3xl max-sm:text-2xl font-bold text-[#080602] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
              What Our Clients Say
            </p>
            <img src="./twosushi.png" alt="" className="w-16" />
          </div>

          <br />

          {/* Buttons moved slightly outside grid so both appear */}  
          <div className="flex items-center sm:justify-center">

          <button
            onClick={prevSlide}
            className="absolute max-sm:top-[200px] max-sm:ml-[-2px] sm:left-[-50px] sm:top-1/2 -translate-y-1/2 text-2xl bg-[#f1e2d3] hover:bg-[#e8d6c1] text-[#4b2e05] font-bold rounded-full p-3 shadow-md"
          >
            ‹
          </button>

          <div className="max-sm:hidden grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {reviews.slice(current, current + 3).map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <p className="italic text-[#5b4636] mb-4">
                  “{review.comment}”
                </p>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {Array(review.stars)
                    .fill("⭐")
                    .map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                </div>
                <p className="font-semibold text-[#4b2e05]">{review.name}</p>
              </div>
            ))}
          </div>


          {/*mobile verion */}
          <div className=" sm:hidden  w-55  ml-10 mt-20">
            {reviews.slice(current, current + 1).map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <p className="italic text-[#5b4636] mb-4">
                  “{review.comment}”
                </p>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {Array(review.stars)
                    .fill("⭐")
                    .map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                </div>
                <p className="font-semibold text-[#4b2e05]">{review.name}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute max-sm:top-[200px] right-[-50px] text-2xl sm:top-1/2 -translate-y-1/2 bg-[#f1e2d3] hover:bg-[#e8d6c1] text-[#4b2e05] font-bold rounded-full p-3 shadow-md"
          >
            ›
          </button>
          </div>
        </div>
          <div
            className="sm:hidden absolute bg-no-repeat bg-cover h-110 w-100 mt-[100px] ml-[180px] z-[-1]"
            style={{
              backgroundImage: "url('./bg2.png')",
            }}
          />
       
        

        <div className="max-sm:hidden">
          <div>
            <img
              src="./suchiii.png"
              alt=""
              className="relative w-65 max-sm:w-160 z-10 sm:ml-5"
            />
          </div>
          <div
            className="absolute bg-no-repeat bg-cover sm:h-70 sm:w-70 max-sm:w-40   sm:mt-[-200px] sm:ml-[-30px] z-[-1]"
            style={{
              backgroundImage: "url('./plat.png')",
            }}
          />
        </div>
      </div>
    </div>
  );
}
