import React from "react";

const FeatureCard = ({ feature }) => {
  console.log(feature);
  return (
    <div
      style={{
        boxShadow: "8px 8px 27px 0px rgba(0, 0, 0, 0.06)",
      }}
      className=" bg-white rounded-xl hover:border-2 border-[#FF4800] cursor-pointer"
    >
      <div className="card-body text-left">
        <div className="flex ">
          <h2 className=" rounded-full px-2 border-2 border-gray-400 bg-gray-100 text-2xl font-Montserrat ">
            {feature?.id}
          </h2>
          <h2 className="card-title pl-3  text-2xl font-Montserrat ">
            {feature?.name}
          </h2>
        </div>
        <p className="text-left mb-5 font-Montserrat ">
          {feature?.description}
        </p>
        <div className="">
          <button className="  bg-transparent border-none font-semibold hover:text-[#FF4800] font-Montserrat">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
