import React from "react";
import profileImg from "../../../src/assets/image.png";
import twitterImg from "../../../src/assets/Frame 1000011231.png";
import facebook from "../../../src/assets/Frame 1000011232.png";
import "../../CustomFont.css";

// rating
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const CarouselCard = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.02)",
          border: "1px solid rgba(0, 0, 0, 0.07)",
        }}
        className="card w-[300px] md:w-[640px] p-2 md:p-10 m-2"
      >
        <div className="flex flex-col md:flex-row  items-center space-y-3 md:space-y-0">
          <img src={profileImg} className="w-[80px] h-[80px]" />
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.03)",
              borderRadius: "8px",
            }}
            className="flex w-full md:w-4/5 justify-between mx-auto  p-2"
          >
            <div className="space-y-3">
              <p className="text-2xl font-NekstSemiBold ">Jonathon McCoy</p>
              <p className="font-Montserrat">UX Designer</p>
            </div>
            <div className="space-y-3  ">
              <img src={twitterImg} />
              <img src={facebook} />
            </div>
          </div>
        </div>
        <p className="pt-[40px] mb-[40px] font-Montserrat">
          Lorem ipsum dolor sit amet consectetur. Enim auctor senectus nisl
          facilisis tristique aliquet porttitor amet eu. Quisque in pulvinar
          dignissim velit nulla ipsum tortor id quis. Pellentesque orci
          adipiscing eleifend quam cras etiam. Augue lacus eget ultrices
          hendrerit. Et sapien vestibulum in tortor. Amet ut vivamus fusce in
          cras.
        </p>
        <Rating style={{ maxWidth: 180 }} value={3.5} readOnly />
      </div>
    </>
  );
};

export default CarouselCard;
