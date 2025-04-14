// import { icon } from '@fortawesome/fontawesome-svg-core';
import {
    faSchool, faOilWell, faToolbox, faBriefcase, faHeartPulse, faRadiation, faHome,
    faTeletype,
    faCalculator,
    faCashRegister,
    faBowlFood,
    faCar,

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OurIndustries = () => {

    const industries = [
        {
            title: "Retail",
            icon: faRadiation,
            iconColor: "#5959e8",
            bgColor: "#9090e9"
        },
        {
            title: "Professional Bodies",
            icon: faBriefcase,
            iconColor: "#d6a357",
            bgColor: "#d4bc98"
        },
        {
            title: "Real Estate",
            icon: faHome,
            iconColor: "#3ebc51",
            bgColor: "#77bd82"
        },
        {
            title: "Healthcare",
            icon: faHeartPulse,
            iconColor: "#c52987",
            bgColor: "#c681aa"
        },
        {
            title: "Telcoms",
            icon: faTeletype,
            iconColor: "#bf2a2a",
            bgColor: "#c07a7a"
        },
        {
            title: "Insurance and Accounting",
            icon: faCalculator,
            iconColor: "#5959e8",
            bgColor: "#9090e9"
        },
        {
            title: "Finance",
            icon: faCashRegister,
            iconColor: "#d6a357",
            bgColor: "#d4bc98"
        },
        {
            title: "Schools",
            icon: faSchool,
            iconColor: "#3ebc51",
            bgColor: "#77bd82"
        },
        {
            title: "Engineering and Construction",
            icon: faToolbox,
            iconColor: "#c52987",
            bgColor: "#c681aa"
        },
        {
            title: "Agriculture and Foods",
            icon: faBowlFood,
            iconColor: "#bf2a2a",
            bgColor: "#c07a7a"
        },
        {
            title: "Logistics and Transportation",
            icon: faCar,
            iconColor: "#5959e8",
            bgColor: "#9090e9"
        },
        {
            title: "Oil and Gas",
            icon: faOilWell,
            iconColor: "#bf2a2a",
            bgColor: "#c07a7a"
        },
    ]
    return (
        <div className="py-[5px] my-[100px]">
            <div className="px-[50px]">
                <h2 className="text-[34px] font-fold text-[#181842] relative" > <span className="after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[4px] after:bg-[#fd9800] mr-2"></span>Industries We Serve</h2>
                <p className="text-[#181842]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident quis neque reprehenderit iure, id amet qui esse, asperiores voluptatem magnam accusantium maxime minima fuga eaque hic eligendi. Doloribus, pariatur!</p>
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
                            <p className="text-[#181842] font-semibold">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurIndustries;
