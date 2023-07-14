import React, { useState } from "react";
import faqImg from "../../../src/assets/Rectangle 241faq.png";
import "../../CustomFont.css";
const Faq = () => {
  const askData = [
    {
      id: 1,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
    {
      id: 2,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
    {
      id: 3,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
    {
      id: 4,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
    {
      id: 5,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
  ];

  const [checkedIndex, setCheckedIndex] = useState(0);
  const handleCheckboxChange = (index) => {
    setCheckedIndex(index);
  };
  return (
    <div className="max-w-7xl mx-auto mt-[120px] flex flex-col md:flex-row px-3 lg:px-0">
      <div className="md:w-1/2 mx-auto space-y-4">
        <div className="-mt-4">
          <p
            style={{
              backgroundColor: "rgba(255, 72, 0, 0.03)",
              border: " 1px solid rgba(255, 72, 0, 0.07)",
            }}
            className="w-[80px] text-center text-[#FF4800] uppercase font-semibold  px-[6px] rounded-full font-Montserrat"
          >
            FAQ
          </p>
          <h3 className="font-NekstBold text-[32px] md:mb-[30px] ">
            Frequently Asked Questions
          </h3>
        </div>
        {askData.map((data, i) => (
          <div key={data.id} className="collapse collapse-arrow bg-base-200 ">
            <input
              type="radio"
              name="my-accordion-2"
              checked={checkedIndex === i}
              onChange={() => handleCheckboxChange(i)}
            />
            <div className="collapse-title text-xl font-NekstMedium">
              {data?.title}
            </div>
            <div className="collapse-content font-Montserrat">
              <p>{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-1/2 mx-auto md:ml-[100px]">
        <div className="">
          <p className="pb-[40px] font-Montserrat">
            We're here to help with any questions you have about plans, pricing,
            and supported features.
          </p>
          <div className=" md:bg-gray-100 rounded-tl-lg">
            <div className="ml-[10px]">
              <img
                src={faqImg}
                className="md:left-0 left-0 w-full md:h-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
