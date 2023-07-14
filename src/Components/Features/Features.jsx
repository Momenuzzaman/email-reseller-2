import React from "react";
import FeatureCard from "./FeatureCard";
import "../../CustomFont.css";
const Features = () => {
  const featuresData = [
    {
      id: 1,
      name: "Create Email Accounts",
      description:
        "Establish personalized email accounts that resonate with your brand or personal identity.",
    },
    {
      id: 2,
      name: "Create Email Aliases",
      description:
        "Manage multiple email addresses under one account to streamline your communications.",
    },
    {
      id: 3,
      name: "Email Forwarders",
      description:
        "Easily redirect incoming emails to the right recipients with our user-friendly email forwarding feature.",
    },
    {
      id: 4,
      name: "Email Groups",
      description:
        "Collaborate effectively by creating email groups and effortlessly communicate with specific teams or departments.",
    },
    {
      id: 5,
      name: "Enhanced Security",
      description:
        "Set your preferences for viruses, spam, and dangerous files to ensure a safe and secure email experience.",
    },
    {
      id: 6,
      name: "PGP Encryption",
      description:
        "Protect your sensitive information with PGP encryption, keeping your emails private and confidential.",
    },
    {
      id: 7,
      name: "SSL Connections",
      description:
        "Enjoy peace of mind knowing that your email communications are secured through SSL connections.",
    },
    {
      id: 8,
      name: "Hassle-Free Migration",
      description:
        "Import your emails from your previous provider at no additional cost, making the transition seamless.",
    },
    {
      id: 9,
      name: "Storage Options",
      description:
        "Store your emails in either the USA or EU, providing you with flexible storage choices based on your preferences.",
    },
  ];
  return (
    <div className="px-3 mt-[120px]">
      <div className="max-w-7xl mx-auto bg-gray-200 rounded-md ">
        <div className="text-center pt-[86px]">
          <p
            style={{
              backgroundColor: "rgba(255, 72, 0, 0.03)",
              border: " 1px solid rgba(255, 72, 0, 0.07)",
            }}
            className="w-[100px] mx-auto text-[#FF4800] uppercase text-center font-semibold py-3 px-[6px] rounded-full font-Montserrat"
          >
            features
          </p>
          <h4
            className="font-NekstBold text-4xl mt-2
          pb-[52px]"
          >
            The features and options are numerous
          </h4>
          <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-[50px]">
            {featuresData.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
