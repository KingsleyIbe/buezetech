import React from 'react'
import ContactUs from '../../components/contact-us/ContactUs';
import MainHeader from '../../components/common/MainHeader';
import TopHeader from '../../components/common/TopHeader';
import MobileHeader from '../../components/common/MobileHeader';
import Footer from '../../components/common/Footer';

const page = () => {
  return (
    <div className="relative mt-[100px] pt-5">
        <TopHeader />
        <MainHeader />
        <MobileHeader />
        <ContactUs />
        <Footer />
    </div>
  );
};

export default page;
