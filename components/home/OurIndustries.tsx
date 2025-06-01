import {
  faSchool,
  faOilWell,
  faToolbox,
  faBriefcase,
  faHeartPulse,
  faRadiation,
  faHome,
  faTeletype,
  faCalculator,
  faCashRegister,
  faBowlFood,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurIndustries = () => {
  const industries = [
    {
      title: "Retail",
      icon: faRadiation,
      iconColor: "#5959e8",
      bgColor: "#9090e9",
    },
    {
      title: "Professional Bodies",
      icon: faBriefcase,
      iconColor: "#d6a357",
      bgColor: "#d4bc98",
    },
    {
      title: "Real Estate",
      icon: faHome,
      iconColor: "#3ebc51",
      bgColor: "#77bd82",
    },
    {
      title: "Healthcare",
      icon: faHeartPulse,
      iconColor: "#c52987",
      bgColor: "#c681aa",
    },
    {
      title: "Telcoms",
      icon: faTeletype,
      iconColor: "#bf2a2a",
      bgColor: "#c07a7a",
    },
    {
      title: "Insurance and Accounting",
      icon: faCalculator,
      iconColor: "#5959e8",
      bgColor: "#9090e9",
    },
    {
      title: "Finance",
      icon: faCashRegister,
      iconColor: "#d6a357",
      bgColor: "#d4bc98",
    },
    {
      title: "Schools",
      icon: faSchool,
      iconColor: "#3ebc51",
      bgColor: "#77bd82",
    },
    {
      title: "Engineering and Construction",
      icon: faToolbox,
      iconColor: "#c52987",
      bgColor: "#c681aa",
    },
    {
      title: "Agriculture and Foods",
      icon: faBowlFood,
      iconColor: "#bf2a2a",
      bgColor: "#c07a7a",
    },
    {
      title: "Logistics and Transportation",
      icon: faCar,
      iconColor: "#5959e8",
      bgColor: "#9090e9",
    },
    {
      title: "Oil and Gas",
      icon: faOilWell,
      iconColor: "#bf2a2a",
      bgColor: "#c07a7a",
    },
  ];
  return (
    <div className="py-[5px] my-[100px]">
      <div className="px-[50px]">
        <h2 className="text-[34px] font-bold text-[#181842] relative">
          {" "}
          <span className="after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[4px] after:bg-[#fd9800] mr-4"></span>
          Industries We Serve
        </h2>
        <p className="text-[#181842] mb-5 font-[BreeSerif]">
          At Bueze Tech Limited, we proudly serve a wide spectrum of industries
          with tailored technology solutions that solve real-world problems and
          unlock new opportunities for growth. Our team understands that every
          industry has its own set of challenges and goals — which is why we
          deliver custom strategies that align with each sector&#39;s unique
          demands.
        </p>
        <p className="text-[#181842] mb-5 font-[BreeSerif]">
          Whether you&#39;re in healthcare seeking secure, compliant systems; in finance looking to automate workflows and enhance cybersecurity; or in education striving to deliver interactive learning experiences — we&#39;ve got you covered. We also work with businesses in e-commerce, logistics, hospitality, agriculture, media, and government, providing innovative software, data-driven insights, and ongoing support that empower our clients to thrive in a digital-first world.
        </p>
        <p className="text-[#181842] mb-5 font-[BreeSerif]">
            Partnering with Bueze Tech means gaining a trusted ally that understands your industry, speaks your language, and delivers measurable impact through technology. No matter your size or sector, we&#39;re here to build, scale, and future-proof your business.
        </p>
      </div>

      <div className="mt-[30px] bg-[#ddd] p-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {industries.map((item, idx) => (
            <li
              key={idx}
              className="bg-white shadow-lg p-8 rounded-[8px] flex flex-col items-center justify-center"
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{
                  color: item.iconColor,
                  backgroundColor: item.bgColor,
                }}
                className="p-4 rounded-full text-xl mb-4"
              />
              <p className="text-[#181842] font-semibold font-[BreeSerif]">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurIndustries;
