import React from "react";
import aboutUsImg from "../../../src/assets/Group 578.png";
import "../../CustomFont.css";
const AboutUs = () => {
  return (
    <div className="hero  px-2 lg:px-0 mt-[120px]">
      <div className="max-w-7xl mx-auto grid lg:flex justify-between flex-row">
        <div>
          <img src={aboutUsImg} className="w-full" />
        </div>
        <div className="lg:w-1/2 xl:pl-[150px] lg:pl-[100px] text-center lg:text-left">
          <p
            style={{
              backgroundColor: "rgba(255, 72, 0, 0.03)",
              border: " 1px solid rgba(255, 72, 0, 0.07)",
            }}
            className="w-[100px] mx-auto lg:mx-0 text-center text-[#FF4800] uppercase font-semibold py-3 px-[6px] rounded-full font-Montserrat"
          >
            About Us
          </p>
          <p className="text-3xl font-NekstBold  py-2 text-black mb-2">
            What can you do with Email Reseller?
          </p>
          <p className="text-gray-600 mb-[50px] font-Montserrat ">
            If that is the case, you are going to find the services provided by
            Email Reseller to be optimal for your needs. When the goal is to
            setup a functional email with a company that is 100% focused on the
            maintenance and performance of their email services, you can’t go
            wrong with Email Reseller.
          </p>
          <button className="bg-[#FF4800] text-[20px] text-white py-[18px] px-[32px] border-none rounded-md font-Montserrat ">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
