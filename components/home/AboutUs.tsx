import {
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
                <p className="text-[#181842] font-[BreeSerif]">We are a dynamic team of innovators, developers, designers, and strategists committed to transforming ideas into powerful digital solutions. We specialize in delivering custom software, intuitive UI/UX design, secure systems, and comprehensive tech services that empower businesses, individuals, and organizations to scale efficiently in a competitive digital world. Our approach is rooted in excellence, innovation, and a deep understanding of client needs—ensuring that every solution we craft drives real value. By partnering with us, you&#39;re not just accessing technical expertise; you&#39;re gaining a future-focused ally dedicated to helping you achieve your goals with speed, quality, and precision.</p>
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
                    <p className="text-[16px] text-[#181842] font-[BreeSerif]">To become Africa&#39;s leading provider of innovative digital learning and technology solutions that empower individuals, businesses, and communities to grow and thrive in a connected world.</p>
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
