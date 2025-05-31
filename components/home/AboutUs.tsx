// import { icon } from '@fortawesome/fontawesome-svg-core';
import {
    faSchool, faOilWell, faToolbox, faBriefcase, faHeartPulse, faRadiation, faHome,
    faTeletype,
    faCalculator,
    faCashRegister,
    faBowlFood,
    faCar,
    faProcedures,
    faLowVision,
    faRunning,

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutUs = () => {

    return (
        <section className="py-[5px] my-[100px]">
            <div className="px-[50px]">
                <h2 className="text-[34px] font-bold text-[#181842] relative" > <span className="after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[4px] after:bg-[#fd9800] mr-4"></span>Who We Are</h2>
                <p className="text-[#181842] font-[BreeSerif]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident quis neque reprehenderit iure, id amet qui esse, asperiores voluptatem magnam accusantium maxime minima fuga eaque hic eligendi. Doloribus, pariatur!</p>
            </div>
            <div className="md:flex-row flex-col flex gap-5 justify-between px-[50px] py-[20px]">
                <div className="bg-[#ddd] p-5 w-[100%] md:w-[33.3%]">
                    <FontAwesomeIcon icon={faProcedures} className="text-[#fd9800] text-[48px] mb-5" />
                    <h2 className="text-[34px] text-[#181842] mb-2">Company Purpose</h2>
                    <p className="text-[16px] text-[#181842] font-[BreeSerif]">To turn visionary concepts into real-world solutions through technological innovation.</p>
                </div>
                 <div className="bg-[#ddd] p-5 w-[100%] md:w-[33.3%]">
                    <FontAwesomeIcon icon={faLowVision} className="text-[#fd9800] text-[48px] mb-5" />
                    <h2 className="text-[34px] text-[#181842] mb-2">Company Vision</h2>
                    <p className="text-[16px] text-[#181842] font-[BreeSerif]">To become Africa’s leading provider of innovative digital learning and technology solutions that empower individuals, businesses, and communities to grow and thrive in a connected world.</p>
                </div>
                 <div className="bg-[#ddd] p-5 w-[100%] md:w-[33.3%]">
                    <FontAwesomeIcon icon={faRunning} className="text-[#fd9800] text-[48px] mb-5" />
                    <h2 className="text-[34px] text-[#181842] mb-2">Company Mission</h2>
                    <p className="text-[16px] text-[#181842] font-[BreeSerif]">At Bueze Tech Limited, our mission is to create transformative digital experiences by providing accessible, high-quality e-learning through the WeLeearn platform, while delivering cutting-edge services in software development, UI/UX design, mobile solutions, cybersecurity consulting, and professional IT training to clients across sectors.</p>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
