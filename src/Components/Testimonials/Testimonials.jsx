import React from "react";
import CarouselCard from "./CarouselCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "../../CustomFont.css";
const Testimonials = () => {
  // button
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 250;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 250;
  };
  return (
    <div className="max-w-7xl mx-auto mt-[120px] px-3 lg:px-0">
      {/* carousel */}
      <div className="relative">
        <div className=" py-4 text-xl">
          <div>
            <p
              style={{
                backgroundColor: "rgba(255, 72, 0, 0.03)",
                border: " 1px solid rgba(255, 72, 0, 0.07)",
              }}
              className="w-[200px]  lg:mx-0 text-center text-[#FF4800] uppercase font-Montserrat font-semibold py-3 px-[16px] rounded-full"
            >
              Testimonials
            </p>
            <p className="text-4xl font-NekstBold ">
              Frequently Asked Questions
            </p>
          </div>
        </div>
        <div className="md:absolute right-0 top-5 ">
          <button
            onClick={scrollLeft}
            className=" m-2 rounded-full bg-orange-100 text-[#FF4800] hover:bg-[#FF4800] hover:text-white  btn btn-circle"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-orange-100 text-[#FF4800] hover:bg-[#FF4800] hover:text-white  btn btn-circle"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="content"
          className="carousel  flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide "
        >
          <div>
            <CarouselCard />
          </div>
          <div>
            <CarouselCard />
          </div>
          <div>
            <CarouselCard />
          </div>
          <div>
            <CarouselCard />
          </div>
          <div>
            <CarouselCard />
          </div>
          <div>
            <CarouselCard />
          </div>
          <div>
            <CarouselCard />
          </div>
          <div>
            <CarouselCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
